import { motion } from 'framer-motion';
import { FaBars as BurgerIcon } from 'react-icons/fa';
import { IoClose as CloseIcon } from 'react-icons/io5';
import { useAppContext } from '../context/AppContext';

const Hamburger = () => {
  const { navbarOpen, openNavbar } = useAppContext();

  return (
    <motion.button
      className={`burger-menu ${navbarOpen ? 'open' : ''}`}
      onClick={openNavbar} 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        animate={{ rotate: navbarOpen ? 90 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {navbarOpen ? (
          <CloseIcon size={30} className="icon open" />
        ) : (
          <BurgerIcon size={30} className="icon" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default Hamburger;