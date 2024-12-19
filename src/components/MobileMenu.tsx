import React from 'react';
import { X } from 'lucide-react';
import { PageType } from '../types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageType) => void;
  currentPage: PageType;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onNavigate,
  currentPage,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute inset-y-0 left-0 w-64 bg-white shadow-xl">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => {
                  onNavigate('home');
                  onClose();
                }}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'home'
                    ? 'bg-blue-50 text-blue-600'
                    : 'hover:bg-gray-100'
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onNavigate('products');
                  onClose();
                }}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'products'
                    ? 'bg-blue-50 text-blue-600'
                    : 'hover:bg-gray-100'
                }`}
              >
                Products
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};