import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { CartItemComponent } from './CartItem';
import { CartHeader } from './CartHeader';
import { CartForm } from './CartForm';
import { CartFooter } from './CartFooter';
import { calculateTotal } from '../../utils';
import { formatToRupiah } from '../../utils/currency';
import { AddressForm } from '../../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
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
      <div className="fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-xl flex flex-col">
        <CartHeader itemCount={state.items.length} onClose={onClose} />
        
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
                <CartForm
                  addressForm={addressForm}
                  onInputChange={handleInputChange}
                />
              )}
            </>
          )}
        </div>

        {state.items.length > 0 && (
          <CartFooter
            total={calculateTotal(state.items)}
            showAddressForm={showAddressForm}
            onShowAddressForm={() => setShowAddressForm(true)}
            onSubmit={handleAddressSubmit}
          />
        )}
      </div>
    </div>
  );
};