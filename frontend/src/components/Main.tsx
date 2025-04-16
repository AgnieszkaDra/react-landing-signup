import React from 'react';
import '../styles/index.scss'

interface HeaderProps {
    children?: React.ReactNode;
 }

export const Main: React.FC<HeaderProps> = ({
  children,
}) => {

  return (
    <main
      className={`main`} 
    >
      {children}
    </main>
  );
};

export default Main;