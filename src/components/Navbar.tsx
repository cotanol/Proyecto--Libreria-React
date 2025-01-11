import { useState } from 'react';

interface NavbarProps {
  cartItems: number;
  cartTotal: number;
}

export function Navbar({ cartItems, cartTotal }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-white text-xl font-bold">📚 BookStore</span>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <a href="#" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md">Inicio</a>
                <a href="#" className="text-indigo-200 hover:bg-indigo-500 px-3 py-2 rounded-md">Categorías</a>
                <a href="#" className="text-indigo-200 hover:bg-indigo-500 px-3 py-2 rounded-md">Ofertas</a>
                <a href="#" className="text-indigo-200 hover:bg-indigo-500 px-3 py-2 rounded-md">Contacto</a>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-indigo-700 px-4 py-2 rounded-lg flex items-center space-x-2">
              <span className="text-white">🛒 ({cartItems})</span>
              <span className="text-white font-bold">${cartTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}