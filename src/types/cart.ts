export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface AddressForm {
  name: string;
  phone: string;
  address: string;
}

export interface CartItemProps {
  item: CartItem;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}