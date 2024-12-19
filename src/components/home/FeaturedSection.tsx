import React from 'react';
import { ProductCard } from '../ProductCard';
import { Product } from '../../types';

interface FeaturedSectionProps {
  products: Product[];
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({ products }) => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6">Produk Unggulan</h2>
      {products.length === 0 ? (
        <p className="text-center text-gray-500">Tidak ada produk unggulan saat ini.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};