import React from 'react';
import { AddressForm } from '../../types';

interface CartFormProps {
  addressForm: AddressForm;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const CartForm: React.FC<CartFormProps> = ({ addressForm, onInputChange }) => {
  return (
    <div className="space-y-4 border-t pt-4">
      <h3 className="font-semibold text-lg">Data Pengiriman</h3>
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nama Lengkap
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={addressForm.name}
          onChange={onInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Masukkan nama lengkap"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Nomor Telepon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={addressForm.phone}
          onChange={onInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Contoh: 08123456789"
        />
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
          Alamat Lengkap
        </label>
        <textarea
          id="address"
          name="address"
          required
          value={addressForm.address}
          onChange={onInputChange}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Masukkan alamat lengkap pengiriman"
        />
      </div>
    </div>
  );
};