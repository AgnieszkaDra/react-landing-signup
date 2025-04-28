export interface MenuItem {
  id: number;
  title: string;
  name?: string;
  path?: string;
  classLink?: string;
  className?: string;
  childIds?: number[];
}

export interface Menu {
  [key: number]: MenuItem;
}

interface FeatureRef {
  id: number;
  className?: string;
}

export interface PricingItem extends MenuItem {
  price?: number;
  description?: string;
  features?: FeatureRef[];
  childIds?: number[];
}

export interface Pricing {
  [key: number]: PricingItem;
}

export const features: { feature: Record<number, { id: number; title?: string; description: string }> } = {
  feature: {
    1: {
      id: 1,
      description: '2 GB of hosting space',
    },
    2: {
      id: 2,
      description: '14 days of free backups',
    },
    3: {
      id: 3,
      description: 'Social integrations',
    },
    4: {
      id: 4,
      description: 'Advanced client billing',
    },
    5: {
      id: 5,
      title: 'Feature 5',
      description: 'Description for Feature 5',
    },
  },
};

export const data: { menu: Menu; pricing: Pricing } = {
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
    },
  },

  pricing: {
    0: {
      id: 0,
      name: '(Root)',
      title: 'Menu',
      childIds: [1, 2, 3],
    },
    1: {
      id: 1,
      title: 'START',
      path: '/start',
      price: 19,
      description:
        'All the features you need to keep your personal files safe, accessible, and easy to share.',
      features: [
        { id: 1 },
        { id: 2 },
        { id: 3, className: 'feature--disabled' },
        { id: 4, className: 'feature--disabled' },
      ],
    },
    2: {
      id: 2,
      title: 'PRO',
      path: '/pro',
      price: 49,
      description:
        'More space and tools for small teams to collaborate and grow efficiently.',
      className: 'active',
      features: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4, className: 'feature--disabled' },
      ],
    },
    3: {
      id: 3,
      title: 'ENTERPRISE',
      path: '/enterprise',
      price: 99,
      description:
        'Advanced solutions for large teams with enterprise-grade features.',
      features: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
      ],
    },
  },
};

export default data;




