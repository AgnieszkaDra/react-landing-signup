export interface MenuItem {
  id: number;
  title?: string;
  name?: string;
  childIds?: number[];
}

export interface Menu {
  [key: number]: MenuItem;
}

export const lists: { menu: Menu } = {
  menu: {
    0: {
      id: 0,
      name: '(Root)',
      childIds: [1, 2, 3, 4],
    },
    1: {
      id: 1,
      title: 'Strona główna',
    },
    2: {
      id: 2,
      title: 'O mnie',
    },
    3: {
      id: 3,
      title: 'Projekty',
    },
    4: {
      id: 4,
      title: 'Kontakt',
    },
  },
};

export default lists;