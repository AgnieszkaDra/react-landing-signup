import React from 'react';

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