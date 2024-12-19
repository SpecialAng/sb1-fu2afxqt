import { electronics } from './electronics';
import { fashion } from './fashion';
import { home } from './home';
import { sports } from './sports';
import { books } from './books';
import { beauty } from './beauty';
import { Product } from '../../types';

// Combine all products into a single array
export const products: Product[] = [
  ...electronics,
  ...fashion,
  ...home,
  ...sports,
  ...books,
  ...beauty
];

// Export individual categories for direct access
export {
  electronics,
  fashion,
  home,
  sports,
  books,
  beauty
};