// import { createContext, ReactNode, useState } from 'react';
// import useToggleNavbar from '../hooks/useToggleNavbar';
// import lists from '../data/lists';

// export type AppContextType = {
//   navbarOpen: boolean;
//   openNavbar: () => void;
//   menu: typeof lists.menu;
//   toggleShowNav: () => void;  // Add this line
// };

// export const AppContext = createContext<AppContextType | undefined>(undefined);

// type AppProviderProps = {
//   children: ReactNode;
// };

// export const AppProvider = ({ children }: AppProviderProps) => {
//   const { navbarOpen, openNavbar } = useToggleNavbar();
//   const [showNav, setShowNav] = useState(false);

//   // Define toggleShowNav
//   const toggleShowNav = () => {
//     setShowNav((prev) => !prev);
//   };

//   return (
//     <AppContext.Provider
//       value={{
//         openNavbar,
//         navbarOpen,
//         menu: lists.menu,
//         toggleShowNav,  // Add this line
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

import React, { createContext, useContext, useState } from 'react';

interface MenuItem {
  id: number;
  title: string;
  childIds: number[];
}

type MenuType = {
  [id: number]: MenuItem;
};

interface AppContextType {
  navbarOpen: boolean;
  openNavbar: () => void;
  menu: MenuType;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const openNavbar = () => setNavbarOpen(prev => !prev);

  // przykładowe menu
  const menu: MenuType = {
    0: { id: 0, title: 'Root', childIds: [1, 2] },
    1: { id: 1, title: 'Home', childIds: [] },
    2: { id: 2, title: 'About', childIds: [] },
  };

  return (
    <AppContext.Provider value={{ navbarOpen, openNavbar, menu }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};