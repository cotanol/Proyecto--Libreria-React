import { Link, useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import { useEffect } from "react";
import { useCategory } from "../hooks/useCategories";
import Loading from "../components/Loading";

const CategoriesProductsPage = () => {
  const { id_categoria } = useParams();
  const { getCategoryById, category, loading, error } = useCategory();

  useEffect(() => {
    if (id_categoria) {
      getCategoryById(id_categoria);
    }
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Categoría no encontrada
          </h1>
          <Link
            to="/categorias"
            className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block"
          >
            Volver a categorías
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              {category.name}
            </h1>
          </div>
        </div>
      </div>

      <main
        className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col gap-8"
        id="books"
      >
        <Link
          to="/categorias"
          className="text-indigo-600 hover:text-indigo-800"
        >
          ← Volver a categorías
        </Link>
        <ItemListContainer />
      </main>
    </div>
  );
};

export default CategoriesProductsPage;
