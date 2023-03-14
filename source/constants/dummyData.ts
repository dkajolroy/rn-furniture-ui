import {CategoryType, ProductType} from '../interface/dataInterface';
export const allCategory: CategoryType[] = [
  {
    id: 1,
    name: 'Chair',
    slug: 'chair',
  },
  {
    id: 2,
    name: 'Table',
    slug: 'table',
  },
  {
    id: 3,
    name: 'Accessories',
    slug: 'accessories',
  },
];

export const product: ProductType[] = [
  {
    id: 6,
    name: 'Leis Chair',
    category: 'chair',
    price: 29,
    image: require('../assets/images/chair3.jpg'),
  },
  {
    id: 1,
    name: 'Walton Chair',
    price: 22,
    category: 'chair',
    image: require('../assets/images/chair.jpg'),
  },
  {
    id: 5,
    name: 'Kel Chair',
    category: 'chair',
    price: 27,
    image: require('../assets/images/chair2.jpg'),
  },
  {
    id: 7,
    category: 'chair',
    name: 'Hakim Chair',
    price: 16,
    image: require('../assets/images/chair4.jpg'),
  },
  {
    id: 4,
    name: 'Nec Chair',
    price: 18,
    category: 'chair',
    image: require('../assets/images/chair2.jpg'),
  },
  {
    id: 3,
    name: 'Fils Chair',
    price: 21,
    category: 'chair',
    image: require('../assets/images/chair1.jpg'),
  },
  {
    id: 8,
    category: 'chair',
    name: 'Kel Chair',
    price: 24,
    image: require('../assets/images/chair5.jpg'),
  },
  {
    id: 9,
    name: 'Fils Table',
    category: 'table',
    price: 33,
    image: require('../assets/images/table1.jpg'),
  },
  {
    id: 10,
    name: 'Met Table',
    price: 39,
    category: 'table',
    image: require('../assets/images/table2.jpg'),
  },
  {
    id: 11,
    name: 'Fils Table',
    price: 35,
    category: 'table',
    image: require('../assets/images/table3.jpg'),
  },
  {
    id: 12,
    name: 'Hils',
    price: 50,
    category: 'accessories',
    image: require('../assets/images/acc1.jpg'),
  },
  {
    id: 13,
    name: 'Formi',
    price: 46,
    category: 'accessories',
    image: require('../assets/images/acc2.jpg'),
  },
  {
    id: 14,
    name: 'Kildd',
    price: 41,
    category: 'accessories',
    image: require('../assets/images/acc3.jpg'),
  },
  {
    id: 15,
    name: 'Mells',
    price: 53,
    category: 'accessories',
    image: require('../assets/images/acc4.jpg'),
  },
];
