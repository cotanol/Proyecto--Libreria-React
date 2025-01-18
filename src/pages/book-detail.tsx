import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useBook } from "../hooks/useBook";
import { useCart } from "../context/CartContext";
import { CartItem } from "../types/book";
import Loading from "../components/Loading";

const BookDetail = () => {
  const { id_libro } = useParams();
  const { book, getBook, loading, error } = useBook();
  const { cartItems, setCartItems } = useCart();
  const [countItem, setCountItem] = useState(0);

  useEffect(() => {
    if (id_libro) getBook(id_libro);
  }, []);

  const increment = () => {
    const max = 7;
    if (countItem < max) setCountItem(countItem + 1);
    else alert(`No puedes agregar más de ${max} productos`);
  };

  const decrement = () => {
    const min = 0;
    if (countItem > min) setCountItem(countItem - 1);
    else alert("No puedes agregar menos de 0 productos");
  };

  const handleCountCart = (cartItem: CartItem) => {
    if (countItem === 0) {
      alert("No puedes agregar 0 productos");
      return;
    }

    if (cartItems.find((item) => item.id === cartItem.id)) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === cartItem.id
          ? { ...item, quantity: item.quantity + cartItem.quantity }
          : item
      );
      setCartItems(updatedCartItems);
      return;
    }
    console.log("No existe asi que se creara uno nuevo");
    const updatedCartItems = [...cartItems, cartItem];
    setCartItems(updatedCartItems);
  };

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  if (!book) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Libro no encontrado
          </h1>
          <Link
            to="/"
            className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-96 object-cover lg:h-[45rem] lg:object-center"
              />
            </div>
            <div className="lg:w-1/2 p-8 lg:h-[45rem]">
              <div>
                <div className="mb-4">
                  <Link
                    to="/"
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    ← Volver al catálogo
                  </Link>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {book.title}
                </h1>
                <p className="text-xl text-indigo-600 mb-2">
                  por {book.author}
                </p>
                <div className="text-2xl font-bold text-gray-900 mb-6">
                  ${book.price.toFixed(2)}
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {book.description}
                </p>
              </div>
              <div className="flex flex-col items-center gap-6">
                {/* Botón  y Contador*/}
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col items-center p-4rounded-lg w-64">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={decrement}
                        className="px-4 py-2 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700 transition-colors"
                      >
                        -
                      </button>
                      <span className="text-2xl font-semibold text-gray-700">
                        {countItem}
                      </span>
                      <button
                        onClick={increment}
                        className="px-4 py-2 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() =>
                    handleCountCart({ ...book, quantity: countItem })
                  }
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Añadir al Carrito</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookDetail;
