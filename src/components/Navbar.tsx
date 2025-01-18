import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { count, total } = useCart();

  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white text-xl font-bold">
              📚 BookStore
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white hover:bg-indigo-500 px-3 py-2 rounded-md"
                      : "text-indigo-200 hover:bg-indigo-500 px-3 py-2 rounded-md"
                  }
                >
                  Inicio
                </NavLink>
                <NavLink
                  to="/categorias"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white hover:bg-indigo-500 px-3 py-2 rounded-md"
                      : "text-indigo-200 hover:bg-indigo-500 px-3 py-2 rounded-md"
                  }
                >
                  Categorías
                </NavLink>
                <NavLink
                  to="/ofertas"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white hover:bg-indigo-500 px-3 py-2 rounded-md"
                      : "text-indigo-200 hover:bg-indigo-500 px-3 py-2 rounded-md"
                  }
                >
                  Ofertas
                </NavLink>
                <NavLink
                  to="/contacto"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white hover:bg-indigo-500 px-3 py-2 rounded-md"
                      : "text-indigo-200 hover:bg-indigo-500 px-3 py-2 rounded-md"
                  }
                >
                  Contacto
                </NavLink>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle Menu"
          >
            <FaBars size={22} />
          </button>

          <Link to="/checkout">
            <div className="flex items-center">
              <div className="bg-indigo-700 px-4 py-2 rounded-lg flex items-center space-x-2">
                <span className="text-white">🛒 ({count})</span>
                <span className="text-white font-bold">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
          </Link>
        </div>
        {/* Menú desplegable en móvil */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col space-y-2 pb-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white hover:bg-indigo-500 px-3 py-2 rounded-md"
                  : "text-indigo-200 hover:bg-indigo-500 px-3 py-2 rounded-md"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/categorias"
              className={({ isActive }) =>
                isActive
                  ? "text-white hover:bg-indigo-500 px-3 py-2 rounded-md"
                  : "text-indigo-200 hover:bg-indigo-500 px-3 py-2 rounded-md"
              }
            >
              Categorías
            </NavLink>
            <NavLink
              to="/ofertas"
              className={({ isActive }) =>
                isActive
                  ? "text-white hover:bg-indigo-500 px-3 py-2 rounded-md"
                  : "text-indigo-200 hover:bg-indigo-500 px-3 py-2 rounded-md"
              }
            >
              Ofertas
            </NavLink>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                isActive
                  ? "text-white hover:bg-indigo-500 px-3 py-2 rounded-md"
                  : "text-indigo-200 hover:bg-indigo-500 px-3 py-2 rounded-md"
              }
            >
              Contacto
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
