export interface Products {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  image: string;
  status: string;
}

export const PRODUCTS: Products[] = [
  {
    id: 'P-001',
    name: 'Olive Oil',
    category: 'Grocery',
    price: 6.5,
    stock: 120,
    image: 'https://natureland.net/_next/image/?url=https%3A%2F%2Fnaturelandcdn-master.fra1.cdn.digitaloceanspaces.com%2Fmedia%2Fnoname%2Fsku%2F67FJCK%2Fcfde0fb6-97b1-437e-9819-6fcb0a3c72e5_xfl09MMZK.jpeg&w=3840&q=65',
    status: 'active',
  },
  {
    id: 'P-002',
    name: 'Sumac Spice',
    category: 'Spices',
    price: 4.5,
    stock: 75,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71Z09nEIqOL._UL500_.jpg',
    status: 'active',
  },
  {
    id: 'P-003',
    name: 'Zaatar',
    category: 'Spices',
    price: 4.0,
    stock: 50,
    image: 'https://www.hillvale.co.uk/cdn/shop/products/Zatar.jpg?v=1655280678',
    status: 'active',
  },
  {
    id: 'P-004',
    name: 'Wooden Bowl',
    category: 'Kitchenware',
    price: 6.75,
    stock: 30,
    image: 'https://www.ikea.com/kw/en/images/products/blanda-matt-serving-bowl-bamboo__1395111_pe966843_s5.jpg',
    status: 'active',
  },
  {
    id: 'P-005',
    name: 'Wooden Spoon',
    category: 'Kitchenware',
    price: 2.0,
    stock: 95,
    image: 'https://www.earlywooddesigns.com/cdn/shop/products/long_handle_wooden_spoon_in_Jatoba_-_Earlywood.jpg?v=1581142532',
    status: 'active',
  },
  {
    id: 'P-006',
    name: 'Lebanese Bread',
    category: 'Bakery',
    price: 0.5,
    stock: 200,
    image: 'https://bf1af2.a-cdn.akinoncloud.com/products/2024/11/20/208971/927e0ac0-d249-4c99-8341-8e70f65ecfca_size3840_cropCenter.jpg',
    status: 'active',
  },
];
