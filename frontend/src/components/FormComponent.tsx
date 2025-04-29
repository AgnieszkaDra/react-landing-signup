import React from 'react';
import { AnimatePresence } from 'framer-motion';
import LoginForm from './LoginForm';
import FormMain from './FormMain';
import { useAuth } from '../context/AuthContext';
import Pricing from './Pricing';

const FormComponent: React.FC = () => {
  const { isRegistered }= useAuth();



  return (
    <>
      <AnimatePresence mode="wait">
        {isRegistered ? (
          <Pricing />
        ) : (
          <FormMain 
            className='main__form'
          />
        
        )}
      </AnimatePresence>

    </>
  );
};

export default FormComponent;