import React from 'react';

interface DividerWithTextProps {
  text?: string;
  className?: string;
}

const DividerWithText: React.FC<DividerWithTextProps> = ({ text = 'or', className = '' }) => {
  return (
    <div className={`divider-with-text ${className}`}>
      <hr className="divider-line" />
      <span className="divider-text">{text}</span>
      <hr className="divider-line" />
    </div>
  );
};

export default DividerWithText;