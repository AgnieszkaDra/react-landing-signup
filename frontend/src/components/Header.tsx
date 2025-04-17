import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import Hamburger from '../ui/elements/Hamburger';
import Menu from '../ui/elements/Menu';
import Logo from '../ui/elements/Logo';

const Header: React.FC = () => {
  const { navbarOpen, openNavbar } = useAppContext();
  return (
    <motion.header
    className="header"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    <motion.div
      className="header__mobile"
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <Hamburger />
    </motion.div>

    <motion.nav
      className={`${navbarOpen ? 'nav open' : 'nav'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <Logo />
      <Menu navbarOpen={navbarOpen} navbarOpenFunc={openNavbar} />
    </motion.nav>
  </motion.header>
  );
};

export default Header;