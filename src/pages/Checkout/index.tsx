import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import BuyerForm from "./BuyerForm";
import { Buyer } from "../../types/buyer";
import { useState } from "react";
import { useOrder } from "../../hooks/useOrder";

const CheckoutPage = () => {
  const { cartItems, total, setCartItems } = useCart();
  const { createOrder } = useOrder();
  const navigate = useNavigate();
  const [confirmEmail, setConfirmEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleClickTrash = (id: string) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const [buyer, setBuyer] = useState<Buyer>({
    fullname: "",
    phone: "",
    email: "",
    direction: "",
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeConfirmEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmEmail(e.target.value);
  };

  const handleSubmitBuyerForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (buyer.email !== confirmEmail) {
      setEmailError("Los correos no coinciden");
      return;
    }

    setEmailError(null);

    if (
      !buyer.fullname.trim() ||
      !buyer.phone.trim() ||
      !buyer.email.trim() ||
      !buyer.direction.trim()
    ) {
      alert("Por favor, completa todos los campos requeridos.");
      return;
    }

    const response = await createOrder({
      buyer: buyer,
      items: cartItems,
      total: total,
      id: "",
    });

    alert("¡Gracias por tu compra!");

    setCartItems([]);

    navigate(`/orden/${response}`);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Tu carrito está vacío
            </h2>
            <p className="text-gray-600 mb-8">
              ¡Explora nuestra tienda y encuentra libros increíbles!
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Continuar comprando
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Tu Carrito</h1>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="bg-white rounded-lg shadow overflow-hidden md:w-[70%] h-fit">
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li key={item.id} className="p-6 flex items-center">
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className="h-24 w-20 object-cover rounded"
                  />
                  <div className="ml-6 flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500">{item.author}</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Cantidad: {item.quantity}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-lg font-medium text-gray-900 mr-4">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button className="text-red-600 hover:text-red-800">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            onClick={() => handleClickTrash(item.id)}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 md:mt-0 bg-white rounded-lg shadow p-6 md:w-[30%]">
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-medium text-gray-900">Total</span>
              <span className="text-2xl font-bold text-gray-900">
                ${total.toFixed(2)}
              </span>
            </div>

            <div className="space-y-4">
              <BuyerForm
                buyer={buyer}
                handleChangeInput={handleChangeInput}
                handleSubmitBuyerForm={handleSubmitBuyerForm}
                confirmEmail={confirmEmail}
                handleChangeConfirmEmail={handleChangeConfirmEmail}
                emailError={emailError}
              />
              <Link
                to="/"
                className="block text-center text-indigo-600 hover:text-indigo-800"
              >
                Continuar comprando
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
