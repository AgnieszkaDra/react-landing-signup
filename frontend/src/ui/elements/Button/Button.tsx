import { motion } from 'framer-motion';
import '../../../styles/abstracts/_index.scss';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  backgroundColor?: string;  
}

const Button: React.FC<ButtonProps> = ({ text, onClick, backgroundColor = 'white', className ='' }) => {  
  return (
    <motion.button
    className={`btn ${backgroundColor || ''} ${className || ''}`.trim()}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {text}
    </motion.button>
  );
};

export default Button;