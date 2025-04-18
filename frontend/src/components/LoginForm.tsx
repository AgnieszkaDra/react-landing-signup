import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { createFieldComponent } from '../ui/elements/createFieldComponent';
import { email, password } from '../ui/formFields';
import { Checkbox, Button, DividerWithText } from '../ui'
import { useAuth } from '../context/AuthContext';
import Title from '../typography/Title';
import { useNavigate } from 'react-router-dom';

const EmailField = createFieldComponent(email);
const PasswordField = createFieldComponent(password);

type FormValues = {
  emailUser: string;
  password: string;
  termsAccepted: boolean;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const LoginForm = ({ className = '' }: { className?: string }) => {
  const { login } = useAuth(); 
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState<FormValues>({
    emailUser: '',
    password: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [generalError, setGeneralError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (name: keyof FormValues, value: string | boolean) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  setGeneralError('');
  setSuccessMessage('');
  };

  const simulateRequest = (email: string) => {
    console.log('ok')
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

    const fields = [email, password];
    let valid = true;
    const newErrors: FormErrors = {};

    for (const field of fields) {
      const value = formValues[field.config.name as keyof FormValues];
      const result = field.validate(typeof value === 'string' ? value : '');

      if (!result.valid) {
        valid = false;
        newErrors[field.config.name as keyof FormValues] = result.message;
        console.log(result.message)
        toast(result.message);
        return;
      }
    }

    if (!formValues.termsAccepted) {
      valid = false;
      newErrors.termsAccepted = 'You must accept the terms and conditions.';
    }

    setErrors(newErrors);

    try {
      const response = await simulateRequest(formValues.emailUser);

      if (response === 'fail') {
        toast('Nie zostałeś zalogowany');
      } else if (response === 'success') {
        toast('Zostałeś zalogowany');
        login(); 
        navigate('/pricing')
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
      <Title kind="h3" text="Sign Up Now" className="form__title" />

      {generalError && <Error>{generalError}</Error>}
      {successMessage && <p className="form__success">{successMessage}</p>}

      <div className="form__inputs">
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

      <DividerWithText />

      {errors.termsAccepted && <Error>{errors.termsAccepted}</Error>}

      <Button
        text={isSubmitting ? 'Signing up...' : 'Sign In'}
        backgroundColor="navy"
        className="form__button"
        disabled={isSubmitting}
      />
      <ToastContainer />

      <Button
        text="Login via Twitter"
        backgroundColor="blue"
        className="form__button"
      />
    </motion.form>
  );
};

export default LoginForm;