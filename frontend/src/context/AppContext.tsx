import React, { createContext, useContext, useState } from 'react';
import lists from '../data/lists';

export interface MenuItem {
  id: number;
  title?: string;
  name?: string;
  path?: string;
  classLink?: string;
  classWrapper?: string;
  childIds?: number[];
}

export interface MenuType {
  [key: number]: MenuItem;
}

interface AppContextType {
  navbarOpen: boolean;
  openNavbar: () => void;
  menu: MenuType;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const openNavbar = () => setNavbarOpen(prev => !prev);

  const menu = lists.menu; 

  return (
    <AppContext.Provider value={{ navbarOpen, openNavbar, menu }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};