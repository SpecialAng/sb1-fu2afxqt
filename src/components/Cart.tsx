import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CartItemComponent } from './CartItem';
import { calculateTotal } from '../utils';
import { formatToRupiah } from '../utils/currency';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AddressForm {
  name: string;
  phone: string;
  address: string;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { state, dispatch } = useCart();
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addressForm, setAddressForm] = useState<AddressForm>({
    name: '',
    phone: '',
    address: ''
  });

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const total = calculateTotal(state.items);
    const itemsList = state.items
      .map(item => `• ${item.name} (${item.quantity}x)`)
      .join('\n');
    
    const message = `Halo, saya ingin memesan:\n\n${itemsList}\n\nTotal: ${formatToRupiah(total)}\n\nData Pengiriman:\nNama: ${addressForm.name}\nTelepon: ${addressForm.phone}\nAlamat: ${addressForm.address}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6282271893280?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    dispatch({ type: 'CLEAR_CART' });
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAddressForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Keranjang ({state.items.length})</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          {state.items.length === 0 ? (
            <p className="text-center text-gray-500">Keranjang Anda kosong</p>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {state.items.map((item) => (
                  <CartItemComponent
                    key={item.id}
                    item={item}
                    onUpdateQuantity={(id, quantity) => 
                      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
                    }
                    onRemove={(id) => 
                      dispatch({ type: 'REMOVE_FROM_CART', payload: id })
                    }
                  />
                ))}
              </div>

              {showAddressForm && (
                <form onSubmit={handleAddressSubmit} className="space-y-4 border-t pt-4">
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Masukkan alamat lengkap pengiriman"
                    />
                  </div>
                </form>
              )}
            </>
          )}
        </div>

        {state.items.length > 0 && (
          <div className="border-t p-4 bg-gray-50">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Total</span>
              <span className="font-bold">{formatToRupiah(calculateTotal(state.items))}</span>
            </div>
            {!showAddressForm ? (
              <button
                onClick={() => setShowAddressForm(true)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Lanjut ke Pengiriman
              </button>
            ) : (
              <button
                onClick={handleAddressSubmit}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Checkout via WhatsApp
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};