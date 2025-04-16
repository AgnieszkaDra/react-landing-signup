import React, { useState } from 'react';

interface CheckboxInputProps {
  label: string;
  name: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ label, name, checked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    setIsChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <div className="form__field">
      <label htmlFor={name} className='checkbox__label'>
        <input
          type="checkbox"
          id={name}
          className='input__checkbox checkbox'
          name={name}
          checked={isChecked}
          onChange={handleChange}
        />
        {label}
      </label>
    </div>
  );
};

export default CheckboxInput;