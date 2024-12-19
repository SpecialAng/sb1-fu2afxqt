import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { formatToRupiah } from '../utils/currency';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 mt-1 text-sm line-clamp-2">{product.description}</p>
        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span className="text-lg sm:text-xl font-bold text-gray-900">
            {formatToRupiah(product.price)}
          </span>
          <button
            onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
            className="w-full sm:w-auto bg-blue-600 text-white px-3 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors"
          >
            <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-sm sm:text-base">Tambah ke Keranjang</span>
          </button>
        </div>
      </div>
    </div>
  );
};