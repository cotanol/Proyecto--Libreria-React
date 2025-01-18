import { Link } from "react-router-dom";
import { Category } from "../types/category";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 transition-all duration-300 group-hover:from-black/80 group-hover:to-black/30" />
      <img
        src={category.image}
        alt={category.name}
        className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
        <p className="text-sm text-gray-200 mb-3">{category.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
            99 libros
          </span>
          <Link
            to={`/categorias/${category.id}`}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Explorar
          </Link>
        </div>
      </div>
    </div>
  );
}
