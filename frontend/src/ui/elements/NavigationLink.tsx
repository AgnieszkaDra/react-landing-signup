import React from 'react';
import { useAppContext } from '../../context/useAppContext';
import { NavLink } from 'react-router-dom';

type NavigationLinkProps = {
  value: string;
  to: string;  // Add 'to' prop for the path
};

export const NavigationLink: React.FC<NavigationLinkProps> = ({ value, to }) => {
  const { toggleShowNav } = useAppContext();

  return (
    <NavLink 
      to={to}  // Pass the 'to' prop here
      onClick={toggleShowNav} 
      className="menu__link link"
    >
      <span className="link__decoration"></span>
      {value}
    </NavLink>
  );
};

export default NavigationLink;