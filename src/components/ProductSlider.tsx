import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductSliderProps {
  children: React.ReactNode;
  title: string;
}

export const ProductSlider: React.FC<ProductSliderProps> = ({ children, title }) => {
  const scrollLeft = () => {
    const slider = document.getElementById('slider');
    if (slider) slider.scrollLeft -= 280;
  };

  const scrollRight = () => {
    const slider = document.getElementById('slider');
    if (slider) slider.scrollLeft += 280;
  };

  return (
    <div className="relative">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{title}</h2>
      <div className="absolute top-1/2 -left-2 sm:left-0 -translate-y-1/2 z-10">
        <button
          onClick={scrollLeft}
          className="p-1 sm:p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>
      <div className="absolute top-1/2 -right-2 sm:right-0 -translate-y-1/2 z-10">
        <button
          onClick={scrollRight}
          className="p-1 sm:p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>
      <div
        id="slider"
        className="flex overflow-x-auto scroll-smooth scrollbar-hide gap-4 sm:gap-6 px-2 sm:px-4 -mx-4 sm:mx-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children}
      </div>
    </div>
  );
};