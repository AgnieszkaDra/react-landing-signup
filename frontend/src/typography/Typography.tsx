import React from 'react';

interface TypographyProps {
  kind: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
  text: string;
  className: string;
}

const Typography: React.FC<TypographyProps> = ({ kind, text, className }) => {
  return React.createElement(kind, { className }, text);
};

export default Typography;