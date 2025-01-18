import { useEffect } from "react";
import { useCategory } from "../hooks/useCategories";
import { CategoryCard } from "../components/CategoryCard";
import Loading from "../components/Loading";

const CategoriesPage = () => {
  const { categories, loading, error, getCategories } = useCategory();

  useEffect(() => {
    getCategories();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explora nuestras Categorías
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre mundos infinitos a través de nuestra amplia selección de
            géneros literarios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CategoriesPage;
