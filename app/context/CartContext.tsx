"use client";
import React, { createContext, useContext, useReducer, useEffect } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

interface CartContextProps extends CartState {
  dispatch: React.Dispatch<any>;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

const cartReducer = (state: CartState, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.cartItems.findIndex(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );
      if (existingItemIndex > -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, cartItems: updatedCartItems };
      }
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case "LOAD_CART":
      return { ...state, cartItems: action.payload };
    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;
      const updatedCartItems = state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + quantity } : item
      );
      const filteredItems = updatedCartItems.filter(
        (item) => item.quantity > 0
      );
      return { ...state, cartItems: filteredItems };
    }
    default:
      return state;
  }
};

export const CartProvider: React.FC = ({ children }: any) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: [],
    setCartItems: () => {},
  });

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    dispatch({ type: "LOAD_CART", payload: cartItems });
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  useEffect(() => {
    // Fetch cart items from API
    fetch("/api/cart")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "LOAD_CART", payload: data });
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);

  return (
    <CartContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// CartContext.tsx
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  const { dispatch } = context;

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  return { ...context, handleQuantityChange };
};
