import React from 'react';

interface TypographyProps {
  kind: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' ;
  subkind?: 'header-font' | 'title' | 'label';
  name?: 'heading' | "text";
  className?: string;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ kind, subkind = '', name = '', className = '', children }) => {
  return React.createElement(kind, { className: `${name} ${kind} ${subkind} ${className}` }, children);
};

export default Typography;