import React from 'react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  onClick: (id: string) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  return (
    <div
      onClick={() => onClick(category.id)}
      className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group h-48 sm:h-56"
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
        <div className="text-white">
          <h3 className="text-lg sm:text-xl font-semibold">{category.name}</h3>
          <p className="text-sm opacity-90 line-clamp-2">{category.description}</p>
        </div>
      </div>
    </div>
  );
};