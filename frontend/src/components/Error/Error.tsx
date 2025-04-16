// import React from 'react';

// interface ErrorProps {
//   message: string;
// }

// const Error: React.FC<ErrorProps> = ({ message }) => {
//   if (!message) return null;

//   return (
//     <p className="form__error" role="alert" aria-live="polite">
//       {message}
//     </p>
//   );
// };

// export default Error;

import React from 'react';


const Error: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  if (!children) return null;

  return (
    <div role="alert" className="error-message">
      {children}
    </div>
  );
};

export default Error;