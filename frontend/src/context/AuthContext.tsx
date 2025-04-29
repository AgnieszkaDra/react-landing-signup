import React, { createContext, useContext, useState } from 'react';

type AuthContextType = {
  isRegistered: boolean;
  register: () => void;
  registerOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isRegistered, setIsRegister] = useState(false);
 
  const register = () => {
    setIsRegister(true);
  };

  const registerOut = () => {
    setIsRegister(false);
  };

  return (
    <AuthContext.Provider value={{ isRegistered, register, registerOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};