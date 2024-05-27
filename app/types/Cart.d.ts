export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}

export interface CartState {
  cart: CartItem[];
}

export type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: string }
  | { type: "SET_CART"; payload: CartItem[] }
  | { type: "CLEAR_CART" };
