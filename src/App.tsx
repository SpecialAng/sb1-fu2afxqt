import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'products'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();

  const handleNavigation = (page: 'home' | 'products') => {
    setCurrentPage(page);
    setSelectedCategory(undefined);
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage('products');
  };

  return (
    <CartProvider>
      <MainLayout
        isCartOpen={isCartOpen}
        onCartClose={() => setIsCartOpen(false)}
        onCartOpen={() => setIsCartOpen(true)}
        currentPage={currentPage}
        onNavigate={handleNavigation}
      >
        {currentPage === 'home' ? (
          <Home onCategoryClick={handleCategoryClick} />
        ) : (
          <Products categoryId={selectedCategory} />
        )}
      </MainLayout>
    </CartProvider>
  );
};

export default App;