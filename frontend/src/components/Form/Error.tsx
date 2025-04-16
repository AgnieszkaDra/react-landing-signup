import React from 'react';
//import './Error.scss'; 

type ErrorProps = {
  children: React.ReactNode;
  className?: string;
};

const Error = ({ children, className = '' }: ErrorProps) => {
  return <p className={`form__error ${className}`}>{children}</p>;
};

export default Error;