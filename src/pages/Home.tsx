import React from 'react';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { filterFeatured, getLatest } from '../data/products/utils';
import { carouselImages } from '../data/carousel';
import { Carousel } from '../components/Carousel';
import { CategorySection, FeaturedSection } from '../components/home';
import { ProductSlider } from '../components/ProductSlider';
import { ProductCard } from '../components/ProductCard';

interface HomeProps {
  onCategoryClick: (id: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onCategoryClick }) => {
  const featuredProducts = filterFeatured(products);
  const newProducts = getLatest(products, 8);

  return (
    <div className="space-y-12">
      <section className="relative -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="max-w-[1920px] mx-auto">
          <Carousel images={carouselImages} />
        </div>
      </section>

      <CategorySection 
        categories={categories} 
        onCategoryClick={onCategoryClick} 
      />

      <FeaturedSection products={featuredProducts} />

      <section className="py-8">
        <ProductSlider title="Produk Terbaru">
          {newProducts.map((product) => (
            <div key={product.id} className="flex-none w-[280px] md:w-[320px] px-2">
              <ProductCard product={product} />
            </div>
          ))}
        </ProductSlider>
      </section>
    </div>
  );
};