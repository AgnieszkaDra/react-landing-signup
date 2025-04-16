import React from 'react';

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  children,
}) => {

  return (
    <header
      className={`header`}
    >
      {children}
    </header>
  );
};

export default Header;