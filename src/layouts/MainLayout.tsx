import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Cart } from '../components/Cart';
import { PageType } from '../types';

interface MainLayoutProps {
  children: React.ReactNode;
  isCartOpen: boolean;
  onCartClose: () => void;
  onCartOpen: () => void;
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  isCartOpen,
  onCartClose,
  onCartOpen,
  currentPage,
  onNavigate,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar 
        onCartClick={onCartOpen}
        onNavigate={onNavigate}
        currentPage={currentPage}
      />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-[1440px] mx-auto">
          {children}
        </div>
      </main>
      <Footer />
      <Cart isOpen={isCartOpen} onClose={onCartClose} />
    </div>
  );
};