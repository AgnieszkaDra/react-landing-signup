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
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={combinedButtonClassName}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {text}
    </motion.button>
  );
};

export default Button;