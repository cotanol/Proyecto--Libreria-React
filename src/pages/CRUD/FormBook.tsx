import { useEffect } from "react";
import { Book } from "../../types/book";
import { useCategory } from "../../hooks/useCategories";

interface FormBookProps {
  book: Book;
  handleChangeInput: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FormBook = ({
  book,
  handleChangeInput,
  handleSubmitForm,
  handleSelectChange,
}: FormBookProps) => {
  const { getCategories, categories } = useCategory();

  useEffect(() => {
    const fetchCategories = async () => {
      await getCategories();
    };
    fetchCategories();
  }, []);

  return (
    <form
      className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6"
      onSubmit={handleSubmitForm}
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Título del libro
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            placeholder="Ingresa el título del libro"
            value={book.title}
            type="text"
            name="title"
            onChange={handleChangeInput}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Autor
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            placeholder="Nombre del autor"
            value={book.author}
            type="text"
            name="author"
            onChange={handleChangeInput}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Descripción
          </label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            placeholder="Escribe una breve descripción del libro"
            value={book.description}
            name="description"
            onChange={handleChangeInput}
            rows={4}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Precio
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-500">$</span>
              <input
                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="0.00"
                type="number"
                name="price"
                step="0.01"
                min="0"
                onChange={handleChangeInput}
                value={book.price}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              URL de la portada
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              placeholder="https://ejemplo.com/imagen.jpg"
              value={book.coverImage}
              type="url"
              name="coverImage"
              onChange={handleChangeInput}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Categorías
          </label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            name="id_categories"
            multiple
            onChange={handleSelectChange}
            value={book.id_categories}
            size={5}
          >
            {categories.map((category) => (
              <option
                key={category.id}
                value={category.id}
                className="py-1 px-2 hover:bg-indigo-50"
              >
                {category.name}
              </option>
            ))}
          </select>
          <p className="text-sm text-gray-500 mt-1">
            Mantén presionado Ctrl (Cmd en Mac) para seleccionar múltiples
            categorías
          </p>
        </div>
      </div>

      <div className="flex items-center justify-end space-x-4 pt-4">
        <button
          type="button"
          className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          onClick={() => window.history.back()}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          <span>Agregar Libro</span>
        </button>
      </div>
    </form>
  );
};

export default FormBook;
