import React, { useState } from 'react';
import { Menu, ShoppingBag } from 'lucide-react';
import { CartButton } from './CartButton';
import { MobileMenu } from './MobileMenu';
import { PageType } from '../types';

interface NavbarProps {
  onCartClick: () => void;
  onNavigate: (page: PageType) => void;
  currentPage: PageType;
}

export const Navbar: React.FC<NavbarProps> = ({
  onCartClick,
  onNavigate,
  currentPage,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-md text-gray-500 lg:hidden"
              >
                <Menu className="h-6 w-6" />
              </button>
              <button
                onClick={() => onNavigate('home')}
                className="flex items-center ml-2 lg:ml-0 hover:opacity-80 transition-opacity"
              >
                <ShoppingBag className="h-6 w-6 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-800">ShopHub</span>
              </button>
            </div>
            <div className="flex items-center">
              <div className="hidden lg:flex space-x-8">
                <button
                  onClick={() => onNavigate('home')}
                  className={`${
                    currentPage === 'home'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  } transition-colors px-1 py-2`}
                >
                  Home
                </button>
                <button
                  onClick={() => onNavigate('products')}
                  className={`${
                    currentPage === 'products'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  } transition-colors px-1 py-2`}
                >
                  Products
                </button>
              </div>
              <div className="ml-4">
                <CartButton onClick={onCartClick} />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={onNavigate}
        currentPage={currentPage}
      />
    </>
  );
};