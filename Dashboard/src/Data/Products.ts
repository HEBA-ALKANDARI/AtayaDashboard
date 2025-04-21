export interface Products {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  image: string
}

export const PRODUCTS: Products[] = 
[
  { id: 'P-001', name: 'Olive Oil Bottle', category: 'Grocery', price: 4.5, stock: 120, image: 'https://via.placeholder.com/60?text=Olive+Oil' },
  { id: 'P-002', name: 'Sumac Spice Pack', category: 'Spices', price: 1.8, stock: 75, image: 'https://via.placeholder.com/60?text=Sumac' },
  { id: 'P-003', name: 'Zaatar Blend', category: 'Spices', price: 2.3, stock: 50, image: 'https://via.placeholder.com/60?text=Zaatar' },
  { id: 'P-004', name: 'Ceramic Bowl', category: 'Kitchenware', price: 6.75, stock: 30, image: 'https://via.placeholder.com/60?text=Bowl' },
  { id: 'P-005', name: 'Wooden Spoon', category: 'Kitchenware', price: 2.0, stock: 95, image: 'https://via.placeholder.com/60?text=Spoon' },
  { id: 'P-006', name: 'Lebanese Bread', category: 'Bakery', price: 0.9, stock: 200, image: 'https://via.placeholder.com/60?text=Bread' }
];