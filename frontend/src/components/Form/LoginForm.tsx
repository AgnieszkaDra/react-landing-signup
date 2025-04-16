import React, { useState } from 'react';
import { InputField } from '../../ui/InputField';
import { createFieldComponent } from '../../ui/elements/createFieldComponent';
import { RequiredRule, EmailRule, PasswordRule } from '../../helpers/rules';
import Error from '../Error/Error';
import Title from '../../typography/Title';
import '../../styles/form.scss';
import { email, password } from '../../ui/formFields';
import CheckboxInput from '../../ui/elements/CheckboxInput';
import Button from '../../ui/elements/Button/Button';

const EmailField = createFieldComponent(email);
const PasswordField = createFieldComponent(password);

type FormValues = {
  emailUser: string;
  password: string;
  termsAccepted: boolean; // Added the checkbox state
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const LoginForm = ({ className = '' }: { className?: string }) => {
  const [formValues, setFormValues] = useState<FormValues>({
    emailUser: '',
    password: '',
    termsAccepted: false, // Initial checkbox state
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [generalError, setGeneralError] = useState('');

  const handleChange = (name: keyof FormValues, value: string | boolean) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setGeneralError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fields = [email, password];
    let valid = true;
    const newErrors: FormErrors = {};

    for (const field of fields) {
      const value = formValues[field.config.name as keyof FormValues];
      const result = field.validate(typeof value === 'string' ? value : '');

      if (!result.valid) {
        valid = false;
        newErrors[field.config.name as keyof FormValues] = result.message;
      }
    }

    // Check if the terms checkbox is accepted
    if (!formValues.termsAccepted) {
      valid = false;
      newErrors.termsAccepted = 'You must accept the terms and conditions.';
    }

    setErrors(newErrors);

    if (!valid) return;

    // Simulate API login
    try {
      console.log('Logging in with:', formValues);
      // const response = await logIn(formValues); // Uncomment when ready
    } catch (err) {
      setGeneralError('Nie udało się zalogować. Spróbuj ponownie.');
    }
  };

  return (
    <form
      className={`form ${className || ''}`}
      onSubmit={handleSubmit}
      noValidate
    >
      <Title kind="h3" text="Sign Up Now" className="form__title" />
      {generalError && <Error>{generalError}</Error>}
        <div className='form__inputs'>
            <EmailField
                value={formValues.emailUser}
                onChange={(e) => handleChange('emailUser', e.target.value)}
                error={errors.emailUser}
            />
            <PasswordField
                value={formValues.password}
                onChange={(e) => handleChange('password', e.target.value)}
                error={errors.password}
            />
        </div>
        <CheckboxInput
            label="I accept the terms and conditions"
            name="termsAccepted"
            checked={formValues.termsAccepted}
            onChange={(checked) => handleChange('termsAccepted', checked)}
        />
      {errors.termsAccepted && <Error>{errors.termsAccepted}</Error>}
      <Button text='Sign In' backgroundColor='navy' className='form__button'/>
      <Button text='Login via Twitter' backgroundColor='blue' className='form__button'/>
    </form>
  );
};

export default LoginForm;