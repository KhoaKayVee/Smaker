"use client";

import React, {
  createContext,
  useContext,
  useReducer,
  Dispatch,
  ReactNode,
} from "react";

// Define CartItem type
export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: number };

const CartContext = createContext<
  { state: CartState; dispatch: Dispatch<CartAction> } | undefined
>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, items: [...state.items, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Export CartItem type
export type { CartItem };
