import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useBook } from "../../hooks/useBook";
import { BookCard } from "../BookCard";
import { useCart } from "../../context/CartContext";
import { CartItem } from "../../types/book";

const ItemListContainer = () => {
  const { id_categoria } = useParams();
  const { books, getBooks, getBooksByCategory } = useBook();
  const { cartItems, setCartItems } = useCart();

  useEffect(() => {
    const loadBook = async () => {
      if (id_categoria) {
        await getBooksByCategory(id_categoria);
      } else {
        await getBooks();
      }
    };
    loadBook();
  }, [id_categoria]);

  const handleCountCart = (cartItem: CartItem) => {
    if (cartItems.find((item) => item.id === cartItem.id)) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === cartItem.id
          ? { ...item, quantity: item.quantity + cartItem.quantity }
          : item
      );
      setCartItems(updatedCartItems);
      return;
    }
    const updatedCartItems = [...cartItems, cartItem];
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onAddToCart={() => handleCountCart({ ...book, quantity: 1 })}
          />
        ))}
      </div>
    </>
  );
};

export default ItemListContainer;
