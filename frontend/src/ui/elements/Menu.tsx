import React, { useContext } from 'react';
import NavigationLink from './NavigationLink';
import { AppContext, AppContextType } from '../../context/AppContext';

const Menu: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('Menu must be used within an AppProvider');
  }

  const { menu } = context;
  const root = menu[0];
  const menuIds = root.childIds;

  return (
    <ul className="menu">
      {menuIds.map((id: number) => {
        const menuItem = menu[id];
        return (
          <li key={id}>
            <NavigationLink id={id} value={menuItem.title} />
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;