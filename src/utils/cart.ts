import { CartItemProps } from '../types';

export const calculateTotal = (items: CartItemProps[]): number => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const calculateItemCount = (items: CartItemProps[]): number => {
  return items.reduce((count, item) => count + item.quantity, 0);
};