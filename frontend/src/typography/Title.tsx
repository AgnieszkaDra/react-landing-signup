import React from 'react';

interface TitleProps {
  kind: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
  text: string;
  className: string;
}

const Title: React.FC<TitleProps> = ({ kind, text, className }) => {
  return React.createElement(kind, { className }, text);
};

export default Title;