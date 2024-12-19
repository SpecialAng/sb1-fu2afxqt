import { Product } from '../../types';

export const filterByCategory = (products: Product[], categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const filterFeatured = (products: Product[]): Product[] => {
  return products.filter(product => product.featured);
};

export const getLatest = (products: Product[], limit: number = 8): Product[] => {
  return [...products].sort((a, b) => b.id.localeCompare(a.id)).slice(0, limit);
};

export const sortProducts = (
  products: Product[],
  sortBy: 'default' | 'price-asc' | 'price-desc'
): Product[] => {
  const sorted = [...products];
  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    default:
      return sorted;
  }
};