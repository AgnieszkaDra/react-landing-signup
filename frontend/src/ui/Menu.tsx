import React from 'react';
import { useAppContext } from '../context/AppContext';
import NavigationLink from './NavigationLink';

const Menu: React.FC = () => {
  const { menu } = useAppContext();

  const root = menu[0];
  const menuIds = root.childIds;

  return (
    <ul className="menu">
      {menuIds?.map((id: number) => {
        const menuItem = menu[id];
        return (
          <li key={id} className={`menu__item`}>
            {menuItem.path && (
              <NavigationLink
                to={menuItem.path || '#'}
                value={menuItem.title || 'Untitled'}
                className={menuItem.classLink || ''}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;