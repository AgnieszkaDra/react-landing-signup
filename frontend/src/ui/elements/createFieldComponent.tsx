import React from 'react';
import { InputField } from '../InputField';

type FieldConfig = {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
};

type InputFieldInstance = {
  config: FieldConfig;
  validate: (value: string) => string;
};

type FieldProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export function createFieldComponent(inputField: InputField) {
  const { type, name, label, placeholder } = inputField.config;

  const FieldComponent: React.FC<FieldProps> = ({ value, onChange, error }) => (
    <div className="form__field">
      <label htmlFor={name} className="input__label">
        {label}
      </label>
      <div className="input__wrapper">
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder || ''}
          className={`form__input input buttons middle ${error ? 'form__input--error' : ''}`}
          value={value}
          onChange={onChange}
          autoComplete="off"
        />
        {error && <span className="form__error">{error}</span>}
      </div>
    </div>
  );

  return FieldComponent;
}