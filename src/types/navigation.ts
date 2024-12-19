export type PageType = 'home' | 'products';

export interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}