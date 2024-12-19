import React, { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { filterByCategory, sortProducts } from '../data/products/utils';
import { categories } from '../data/categories';
import { ChevronLeft } from 'lucide-react';

interface ProductsProps {
  categoryId?: string;
}

export const Products: React.FC<ProductsProps> = ({ categoryId }) => {
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');
  
  const filteredProducts = useMemo(() => {
    if (!categoryId) return products;
    return products.filter(product => product.category === categoryId);
  }, [categoryId]);

  const sortedProducts = useMemo(() => {
    return sortProducts(filteredProducts, sortBy);
  }, [filteredProducts, sortBy]);

  const categoryName = useMemo(() => {
    if (!categoryId) return 'Semua Produk';
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Semua Produk';
  }, [categoryId]);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col space-y-4 mb-6">
        {categoryId && (
          <button
            onClick={() => window.history.back()}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span>Kembali ke Kategori</span>
          </button>
        )}
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h2 className="text-2xl font-bold mb-4 sm:mb-0">{categoryName}</h2>
          <div className="w-full sm:w-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="default">Urutkan</option>
              <option value="price-asc">Harga: Rendah ke Tinggi</option>
              <option value="price-desc">Harga: Tinggi ke Rendah</option>
            </select>
          </div>
        </div>
      </div>
      
      {sortedProducts.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">Tidak ada produk yang tersedia untuk kategori ini.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};