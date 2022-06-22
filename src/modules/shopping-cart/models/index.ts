export type Product = {
  id: string;
  price: number;
  label: string;
};

export type ShoppingCartItem = {
  productId: string;
  quantity: number;
};

export const ALL_PRODUCTS: Product[] = [
  {
    id: 'bread-product-id',
    price: 15,
    label: 'Bread',
  },
  {
    id: 'choco-product-id',
    price: 20,
    label: 'Chocolate',
  },
  {
    id: 'milk-product-id',
    price: 35,
    label: 'Milk',
  },
  {
    id: 'cheese-product-id',
    price: 45,
    label: 'Cheese',
  },
  {
    id: 'apple-product-id',
    price: 12,
    label: 'Apples',
  },
  {
    id: 'potato-product-id',
    price: 7,
    label: 'Potatos',
  },
];

export const PRODUCTS_MAP = ALL_PRODUCTS.reduce(
  (acc: { [key: string]: Product }, product) => {
    acc[product.id] = product;
    return acc;
  },
  {}
);
