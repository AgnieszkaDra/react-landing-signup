import React from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
//import { useAppContext } from '../../context/useAppContext';
import { useAppContext } from '../../context/AppContext';

const CloseIcon = IoClose as React.FC<{ size?: number; className?: string }>;
const BarsIcon = FaBars as React.FC<{ size?: number; className?: string }>;

const Hamburger: React.FC = () => {
  const { navbarOpen, openNavbar } = useAppContext();

  return (
    <button 
      onClick={openNavbar} 
      className="burger-menu" 
      aria-label="Toggle navigation"
    >
      {navbarOpen ? (
        <CloseIcon size={30} className={`icon ${navbarOpen ? 'open' : ''}`} /> 
      ) : (
        <BarsIcon size={30} className={`icon ${navbarOpen ? 'open' : ''}`} />
      )}
    </button>
  );
};

export default Hamburger;