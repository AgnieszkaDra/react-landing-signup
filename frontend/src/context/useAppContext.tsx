import { useContext } from 'react';
import { AppContext } from './AppContext';

export const useAppContext = () => {
  try {
    const context = useContext(AppContext);
    if (!context) throw new Error();
    return context;
  } catch {
    throw new Error('useAppContext must be used within an AppProvider');
  }
};
