import React from 'react';
import { InputField } from '../InputField';

type FieldProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder?: string; 
};

export function createFieldComponent(inputField: InputField) {
  const { type, name, label, placeholder: defaultPlaceholder } = inputField.config;

  const FieldComponent: React.FC<FieldProps> = ({
    value,
    onChange,
    error,
    onKeyDown,
    disabled,
    placeholder, 
  }) => (
    <div className="form__field">
      <label htmlFor={name} className="input__label">
        {label}
      </label>
      <div className="input__wrapper">
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder ?? defaultPlaceholder ?? ''}
          className={`form__input input buttons middle ${error ? 'form__input--error' : ''}`}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          disabled={disabled}
          autoComplete="off"
        />
        {error && <span className="form__error">{error}</span>}
      </div>
    </div>
  );

  return FieldComponent;
}
