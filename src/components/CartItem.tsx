import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { formatToRupiah } from '../utils/currency';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export const CartItemComponent: React.FC<CartItemProps> = ({
  item,
  onUpdateQuantity,
  onRemove,
}) => {
  return (
    <div className="flex items-center py-4 border-b">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded"
      />
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">{formatToRupiah(item.price)}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          disabled={item.quantity <= 1}
          aria-label="Kurangi jumlah"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Tambah jumlah"
        >
          <Plus className="h-4 w-4" />
        </button>
        <button
          onClick={() => onRemove(item.id)}
          className="p-1 text-red-500 hover:bg-red-50 rounded-full transition-colors"
          aria-label="Hapus item"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};