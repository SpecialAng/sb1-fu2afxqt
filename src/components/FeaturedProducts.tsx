import React from 'react';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';

export const FeaturedProducts: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};