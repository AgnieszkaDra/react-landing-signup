import React from 'react';
import { useAppContext } from '../context/AppContext';
import Hamburger from '../ui/elements/Hamburger';
import Menu from '../ui/elements/Menu';

const Header: React.FC = () => {
  const { navbarOpen, openNavbar } = useAppContext();
  return (
    <header className="header">
      <div className='mobile-nav'>
        <Hamburger />  
      </div>
      <nav className={`${navbarOpen ? `nav open ` : 'nav'}`}>
        <Menu navbarOpen={navbarOpen} navbarOpenFunc={openNavbar}></Menu> 
      </nav>
     
    </header>
  );
};

export default Header;