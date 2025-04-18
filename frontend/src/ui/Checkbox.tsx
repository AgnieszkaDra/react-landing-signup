import React from 'react';
import checkOff from '../assets/On.png'
import checkOn from '../assets/Rectangle.png';

interface CheckboxImageProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

const Checkbox: React.FC<CheckboxImageProps> = ({ checked, onChange, label}) => {
 
  return (
    <div className='form__field'>
      <label className="checkbox__image__wrapper">
      <img
        src={checked ? checkOff : checkOn}
        alt={checked ? 'Checked' : 'Unchecked'}
        className="checkbox__image"
        onClick={() => onChange(!checked)}
      />
      {label && <span className="checkbox__label">{label}</span>}
    </label>
    </div>
 
  );
};

export default Checkbox;