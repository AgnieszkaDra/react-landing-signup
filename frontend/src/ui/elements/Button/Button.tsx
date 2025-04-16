import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  backgroundColor?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, backgroundColor = '', className = '' }) => {
  return (
    <div className="button__wrapper">
      <motion.button
        className={`button ${backgroundColor} ${className}`.trim()}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {text}
      </motion.button>
    </div>
  );
};

export default Button;