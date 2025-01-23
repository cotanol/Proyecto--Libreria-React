import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { CartItem } from "../types/book";

interface CartContextType {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe estar dentro de CartProvider");
  }

  return context;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [count, setCount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [cartItems, setCartItems] = useState<CartItem[]>(() =>
    JSON.parse(localStorage.getItem("cartItems") || "[]")
  );

  useEffect(() => {
    setCount(cartItems.reduce((acc, item) => acc + item.quantity, 0));
    setTotal(
      cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        count,
        setCount,
        total,
        setTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
