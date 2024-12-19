import React from 'react';
import { CategoryCard } from '../CategoryCard';
import { Category } from '../../types';

interface CategorySectionProps {
  categories: Category[];
  onCategoryClick: (id: string) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  categories,
  onCategoryClick,
}) => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6">Kategori Belanja</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onClick={onCategoryClick}
          />
        ))}
      </div>
    </section>
  );
};