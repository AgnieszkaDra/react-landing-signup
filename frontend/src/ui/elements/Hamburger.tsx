import React from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useAppContext } from '../../context/useAppContext';

const Hamburger: React.FC = () => {
  const { navbarOpen, openNavbar } = useAppContext();

  return (
    <button 
      onClick={openNavbar} 
      className="burger-menu" 
      aria-label="Toggle navigation"
    >
      {navbarOpen ? (
        <IoClose size={30} className={`icon ${navbarOpen ? 'open' : ''}`} />
      ) : (
        <FaBars size={30} className={`icon ${navbarOpen ? 'open' : ''}`} />
      )}
    </button>
  );
};

export default Hamburger;