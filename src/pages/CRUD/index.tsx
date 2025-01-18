import { useState } from "react";
import { Book } from "../../types/book";
import FormBook from "./FormBook";
import { useBook } from "../../hooks/useBook";
import { useCategory } from "../../hooks/useCategories";

const CRUD = () => {
  const { addBook } = useBook();

  const [dataBook, setDataBook] = useState<Book>({
    id: "",
    title: "",
    author: "",
    price: 0.0,
    coverImage: "",
    description: "",
    id_categories: [],
  });

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setDataBook((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) || 0 : value, // Conversión para 'price'
    }));

    console.log(dataBook);
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setDataBook((prev) => ({ ...prev, id_categories: selected }));
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !dataBook.title.trim() ||
      !dataBook.author.trim() ||
      !dataBook.price ||
      !dataBook.coverImage.trim() ||
      !dataBook.description.trim() ||
      dataBook.id_categories.length === 0
    ) {
      alert("Por favor, completa todos los campos requeridos.");
      return;
    }

    console.log("Se envio al backend: ", dataBook);
    addBook(dataBook);
    alert("Libro agregado correctamente");
    setDataBook({
      id: "",
      title: "",
      author: "",
      price: 0.0,
      coverImage: "",
      description: "",
      id_categories: [],
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            Gestión de Libros
          </h1>
          <p className="mt-2 text-gray-600">
            Agrega nuevos libros a tu catálogo
          </p>
        </div>

        <FormBook
          handleChangeInput={handleChangeInput}
          book={dataBook}
          handleSubmitForm={handleSubmitForm}
          handleSelectChange={handleChangeSelect}
        />
      </div>
    </div>
  );
};

export default CRUD;
