import React from 'react';

interface TypographyProps {
  kind: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'button';
  subkind?: 'header-font' | 'title' | 'label' | 'paragraph' | 'middle' | 'lead';
  name?: 'heading' | 'text' | 'buttons';
  className?: string;
  backgroundColor?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  kind,
  subkind = '',
  name = '',
  className = '',
  backgroundColor = '',
  disabled = false,
  children,
}) => {
  const computedClassName = [name, kind, subkind, backgroundColor, className]
    .filter(Boolean) // remove empty strings
    .join(' '); // join with spaces

  const props: any = { className: computedClassName };

  if (kind === 'button') {
    props.disabled = disabled;
    type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
    return React.createElement(kind, props as ButtonProps, children);
  }

  return React.createElement(kind, props, children);
};

export default Typography;