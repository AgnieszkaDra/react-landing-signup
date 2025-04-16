import { createContext, ReactNode, useState } from 'react';
import useToggleNavbar from '../hooks/useToggleNavbar';
import lists from '../data/lists';

export type AppContextType = {
  navbarOpen: boolean;
  openNavbar: () => void;
  menu: typeof lists.menu;
  toggleShowNav: () => void;  // Add this line
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const { navbarOpen, openNavbar } = useToggleNavbar();
  const [showNav, setShowNav] = useState(false);

  // Define toggleShowNav
  const toggleShowNav = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <AppContext.Provider
      value={{
        openNavbar,
        navbarOpen,
        menu: lists.menu,
        toggleShowNav,  // Add this line
      }}
    >
      {children}
    </AppContext.Provider>
  );
};