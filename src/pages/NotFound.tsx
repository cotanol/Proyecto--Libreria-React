import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-col justify-items-center">
        <div className="text-center">
          <div className="text-9xl font-bold text-indigo-600 mb-4">404</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Página no encontrada
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Lo sentimos, la página que buscas no existe.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Volver al inicio
          </Link>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            ¿Buscabas alguna de estas páginas?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/categorias"
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-indigo-600">Categorías</h3>
              <p className="text-sm text-gray-600">
                Explora nuestras categorías de libros
              </p>
            </Link>
            <Link
              to="/ofertas"
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-indigo-600">Ofertas</h3>
              <p className="text-sm text-gray-600">
                Descubre nuestras ofertas especiales
              </p>
            </Link>
            <Link
              to="/checkout"
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-indigo-600">Carrito</h3>
              <p className="text-sm text-gray-600">
                Revisa tu carrito de compras
              </p>
            </Link>
            <Link
              to="/contacto"
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-indigo-600">Contacto</h3>
              <p className="text-sm text-gray-600">
                ¿Necesitas ayuda? Contáctanos
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
