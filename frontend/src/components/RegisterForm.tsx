import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { createFieldComponent } from '../ui/elements/createFieldComponent';
import { name, email, password } from '../ui/formFields';
import { Checkbox, Button, DividerWithText, NavigationLink } from '../ui';
import { useAuth } from '../context/AuthContext';

const NameField = createFieldComponent(name);
const EmailField = createFieldComponent(email);
const PasswordField = createFieldComponent(password);

type FormValues = {
  name: string;
  emailUser: string;
  password: string;
  termsAccepted: boolean;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const RegisterForm = ({ className = '' }: { className?: string }) => {
  const { register } = useAuth();
 
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    emailUser: '',
    password: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (name: keyof FormValues, value: string | boolean) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const simulateRequest = (email: string) => {
    return new Promise((resolve, reject) => {
      if (email === 'delay@example.com') {
        setTimeout(() => resolve('Delayed response success'), 2000);
      } else if (email === 'fail@example.com') {
        setTimeout(() => resolve('fail'), 2000);
      } else if (email === 'success@example.com') {
        resolve('success');
      } else if (email.endsWith('@blocked.com')) {
        reject(new Error('This email domain is blocked.'));
      } else {
        resolve('success');
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fields = [name, email, password];
    let valid = true;
    const newErrors: FormErrors = {};

    for (const field of fields) {
      const value = formValues[field.config.name as keyof FormValues];
      const result = field.validate(typeof value === 'string' ? value : '');

      if (!result.valid) {
        valid = false;
        newErrors[field.config.name as keyof FormValues] = result.message;
        setIsSubmitting(true);
        toast(result.message);
        setTimeout(() => {
          setIsSubmitting(false);
        }, 5000);
        return;
      }
    }

    if (!formValues.termsAccepted) {
      valid = false;
      newErrors.termsAccepted = 'You must accept the terms and conditions.';
      setIsSubmitting(true);
      toast('This condition must be confirmed by the user');
      setTimeout(() => {
        setIsSubmitting(false);
      }, 5000);
      return;
    }

    setErrors(newErrors);

    try {
      const response = await simulateRequest(formValues.emailUser);

      if (response === 'fail') {
        toast('Nie zostałeś zarejestrowany');
      } else if (response === 'success') {
        toast('Zostałeś zarejestrowany. Wybierz opcję produktu');
        register();
      }
    } catch (error) {
      console.error('Błąd logowania:', error);
      toast('Wystąpił błąd podczas logowania');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      className={`form ${className}`}
      onSubmit={handleSubmit}
      noValidate
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="h3 heading title form__title">Join Us Now</h3>
      <div className="form__inputs">
        <motion.div whileHover={{ scale: 1.02 }}>
          <NameField
            value={formValues.name}
            onChange={(e) => handleChange('name', e.target.value)}
            error={errors.name}
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }}>
          <EmailField
            value={formValues.emailUser}
            onChange={(e) => handleChange('emailUser', e.target.value)}
            error={errors.emailUser}
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }}>
          <PasswordField
            value={formValues.password}
            onChange={(e) => handleChange('password', e.target.value)}
            error={errors.password}
          />
        </motion.div>
      </div>
      <motion.div whileHover={{ scale: 1.01 }}>
        <Checkbox
          checked={formValues.termsAccepted}
          onChange={(checked: boolean) => handleChange('termsAccepted', checked)}
          label="I agree to the Terms of Service"
        />
      </motion.div>
      <Button
        text={isSubmitting ? 'Signing Up...' : 'Sign Up'}
        backgroundColor="bg-dark"
        className="buttons middle form__button"
        disabled={isSubmitting}
      />
      <ToastContainer />
      <DividerWithText />
      <Button text="Login via Twitter" backgroundColor="twitter" className="buttons middle form__button" />
      <p className="form__footer">
        Do you have an Account?
        <NavigationLink to="/login" value="Sign In" className="form__link" />
      </p>
    </motion.form>
  );
};

export default RegisterForm;