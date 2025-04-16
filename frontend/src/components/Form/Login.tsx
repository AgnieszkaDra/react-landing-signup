import React, { useState } from 'react';
//import { InputField } from '../../ui/fields/InputField';
//import { createFieldComponent } from '../../ui/fields/createFieldComponent';
import { authWrapper } from '../../shared/authWrapper';

type LoginProps = {
  //fields: InputField[];
  fields: any
};

export const Login: React.FC<LoginProps> = ({ fields }) => {
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const validateFields = (): boolean => {
    let isValid = true;
    const newErrors: Record<string, string[]> = {};

    fields.forEach((field) => {
      const value = field.getValue();
      const failedRules = field.rules?.filter((rule) => !rule.validate(value)) || [];
      const fieldErrors = failedRules.map((rule) => rule.getErrorMessage());

      if (fieldErrors.length > 0) {
        newErrors[field.name] = fieldErrors;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const isValid = validateFields();

    if (isValid) {
      console.log('✅ All fields are valid! Submitting form...');
    } else {
      console.warn('⚠️ Some fields are invalid.');
    }
  };

  const handleSwitchToRegister = () => {
    authWrapper.setType('register', fields);
    const container = document.querySelector('.account__auth-form');
    if (container) {
        alert(container)
      //const root = ReactDOM.createRoot(container);
      //root.render(authWrapper.render());
    }
  };

  return (
    <div className="forms__login block">
      <h2 className="forms__title">Logowanie</h2>
      <p className="forms__paragraph">Podaj hasło, aby się zalogować</p>

      <form className="form" onSubmit={handleSubmit}>
        {fields.map((field) =>
          createFieldComponent(field, errors[field.name] || [])
        )}

        <button className="form__button" type="submit">
          Zaloguj się
        </button>
      </form>

      <p className="forms__paragraph">
        Nie masz konta?{' '}
        <a className="form__link" onClick={handleSwitchToRegister}>
          Zarejestruj się
        </a>
      </p>
    </div>
  );
};