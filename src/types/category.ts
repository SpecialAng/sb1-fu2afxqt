export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface CategoryCardProps {
  category: Category;
  onClick: (id: string) => void;
}