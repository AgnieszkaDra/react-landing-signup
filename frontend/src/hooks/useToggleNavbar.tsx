import { useState, useEffect } from 'react';

const useToggleNavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openNavbar = () => {
    if (!isMobile) return;
    setNavbarOpen(prev => !prev);
  };

  return { navbarOpen, openNavbar };
};

export default useToggleNavbar;