import React from 'react';
import NavigationLink from './NavigationLink';
import { useAppContext } from '../../context/AppContext';

const Menu: React.FC = () => {
  const { menu } = useAppContext(); // ✅ just use the hook directly

  const root = menu[0];
  const menuIds = root.childIds;

  return (
    <ul className="menu">
      {menuIds?.map((id: number) => {
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