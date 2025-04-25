import React from 'react';
import { NavLink } from 'react-router-dom';

type NavigationLinkProps = {
  value: string;
  to: string;
  className?: string;
};

export const NavigationLink: React.FC<NavigationLinkProps> = ({ value, to, className = '' }) => {
  return (
    <NavLink to={to} className={`link ${className}`}>
      {value}
    </NavLink>
  );
};

export default NavigationLink;