import React from 'react';
import { formatToRupiah } from '../../utils/currency';

interface CartFooterProps {
  total: number;
  showAddressForm: boolean;
  onShowAddressForm: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const CartFooter: React.FC<CartFooterProps> = ({
  total,
  showAddressForm,
  onShowAddressForm,
  onSubmit,
}) => {
  return (
    <div className="border-t p-4 bg-gray-50">
      <div className="flex justify-between mb-4">
        <span className="font-medium">Total</span>
        <span className="font-bold">{formatToRupiah(total)}</span>
      </div>
      {!showAddressForm ? (
        <button
          onClick={onShowAddressForm}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Lanjut ke Pengiriman
        </button>
      ) : (
        <button
          onClick={onSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Checkout via WhatsApp
        </button>
      )}
    </div>
  );
};