import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  backgroundColor?: string;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  backgroundColor = '',
  className = '',
  disabled = false,
}) => {
  const combinedButtonClassName = `button__wrapper ${backgroundColor} ${className}`.trim();

  return (
    <div className={combinedButtonClassName}>
      <motion.button
        className='button'
        onClick={onClick}
        disabled={disabled}
        // whileHover={!disabled ? { scale: 1.05 } : undefined}
        // whileTap={!disabled ? { scale: 0.95 } : undefined}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {text}
      </motion.button>
    </div>
  );
};

export default Button;