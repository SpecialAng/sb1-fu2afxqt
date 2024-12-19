export const formatPrice = (price: number): string => {
  return price.toFixed(2);
};

export const calculateDiscount = (price: number, discountPercentage: number): number => {
  return price * (1 - discountPercentage / 100);
};