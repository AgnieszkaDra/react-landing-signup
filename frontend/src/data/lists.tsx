export interface MenuItem {
  id: number;
  title: string;
  name?: string;
  path?: string;
  classLink?: string;
  classWrapper?: string;
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
      title: 'Menu',
      childIds: [1, 2, 3, 4, 5],
    },
    1: {
      id: 1,
      title: 'Overview',
      path: '/overview',
      classLink: 'link__disabled',
    },
    2: {
      id: 2,
      title: 'Prices',
      path: '/prices',
    },
    3: {
      id: 3,
      title: 'Blog',
      path: '/blog',
    },
    4: {
      id: 4,
      title: 'Feedback',
      path: '/feedback',
    },
    5: {
      id: 5,
      title: 'Purchase',
      path: '/purchase',
      classWrapper: 'menu__item__button pink',
    },
  }
}

export default lists;