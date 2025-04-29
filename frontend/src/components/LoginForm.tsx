import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { createFieldComponent } from '../ui/elements/createFieldComponent';
import { email, password } from '../ui/formFields';
import { Checkbox, Button, DividerWithText, NavigationLink } from '../ui';
import { useAuth } from '../context/AuthContext';
import { useInputValidation } from '../hooks/useInputValidation';

const EmailField = createFieldComponent(email);
const PasswordField = createFieldComponent(password);

type FormValues = {
  emailUser: string;
  password: string;
  termsAccepted: boolean;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ className = '' }) => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState<FormValues>({
    emailUser: '',
    password: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null!);

  useInputValidation(
    emailInputRef,
    email.validate,
    () => setErrors((prev) => ({ ...prev, emailUser: '' })),
    (msg) => {
      setErrors((prev) => ({ ...prev, emailUser: msg }));
      toast(msg);
      setIsEmailValid(false);
    }
  );

  const handleChange = (name: keyof FormValues, value: string | boolean) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));

    if (name === 'emailUser') {
      const result = email.validate(value as string);
      setIsEmailValid(result.valid);
    }
  };

  const simulateRequest = (email: string) => {
    return new Promise<string>((resolve, reject) => {
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
    const newErrors: FormErrors = {};

    for (const field of fields) {
      const value = formValues[field.config.name as keyof FormValues];
      const result = field.validate(typeof value === 'string' ? value : '');

      if (!result.valid) {
        newErrors[field.config.name as keyof FormValues] = result.message;
        setErrors(newErrors);
        setIsSubmitting(false);
        toast(result.message);
        setIsSignUp(true);
        return;
      }
    }

    if (!formValues.termsAccepted) {
      newErrors.termsAccepted = 'You must accept the terms and conditions.';
      setErrors(newErrors);
      setIsSubmitting(false);
      toast('This condition must be confirmed by the user');
      return;
    }

    setErrors(newErrors);

    try {
      const response = await simulateRequest(formValues.emailUser);

      if (response === 'fail') {
        toast('Nie zostałeś zalogowany');
      } else if (response === 'success') {
        toast('Zostałeś zalogowany');
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
      <h3 className="h3 heading title form__title">Sign In Now</h3>
      <div className="form__inputs">

        <motion.div whileHover={{ scale: 1.02 }}>
          <EmailField
            value={formValues.emailUser}
            onChange={(e) => handleChange('emailUser', e.target.value)}
            error={errors.emailUser}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                const value = e.currentTarget.value;
                const result = email.validate(value);
                if (!result.valid) {
                  setErrors((prev) => ({ ...prev, emailUser: result.message }));
                  toast(result.message);
                } else {
                  setErrors((prev) => ({ ...prev, emailUser: '' }));
                }
              }
            }}
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }}>
          <PasswordField
            value={formValues.password}
            onChange={(e) => handleChange('password', e.target.value)}
            error={errors.password}
            disabled={!isEmailValid}
            placeholder={!isEmailValid ? 'Your password. Please enter a valid email first' : undefined}
          />
        </motion.div>
      </div>

      <motion.div whileHover={{ scale: 1.01 }}>
        <Checkbox
          checked={formValues.termsAccepted}
          onChange={(checked) => handleChange('termsAccepted', checked)}
          label="I agree to the Terms of Service"
        />
      </motion.div>

      <Button
        text={isSubmitting ? 'Signing Up...' : 'Sign In'}
        backgroundColor="bg-dark"
        className="buttons middle form__button"
        disabled={isSubmitting}
      />

      <ToastContainer />
      <DividerWithText />

      <Button text="Login via Twitter" backgroundColor="twitter" className="buttons middle form__button" />

      <p className="form__footer">
        Don't you have an Account?{' '}
        <NavigationLink to="/register" value="Sign Up" className="form__link" />
      </p>
    </motion.form>
  );
};

export default LoginForm;