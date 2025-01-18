import { useEffect } from "react";
import { Hero } from "../components/Hero";

import { useBook } from "../hooks/useBook";

import ItemListContainer from "../components/ItemListContainer";
import Loading from "../components/Loading";

const Home = () => {
  const { getBooks, error, loading } = useBook();

  useEffect(() => {
    getBooks();
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>Error al cargar</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8" id="books">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Nuestros Libros Destacados
        </h2>
        <ItemListContainer />
      </main>
    </div>
  );
};

export default Home;
