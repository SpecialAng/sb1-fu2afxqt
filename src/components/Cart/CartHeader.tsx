import React from 'react';
import { X } from 'lucide-react';

interface CartHeaderProps {
  itemCount: number;
  onClose: () => void;
}

export const CartHeader: React.FC<CartHeaderProps> = ({ itemCount, onClose }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <h2 className="text-lg font-semibold">Keranjang ({itemCount})</h2>
      <button 
        onClick={onClose}
        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="Close cart"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};