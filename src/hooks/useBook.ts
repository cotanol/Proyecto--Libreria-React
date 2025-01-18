import { useState } from "react";
import db from "../db/db";
import { Book } from "../types/book";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

interface UseBookProps {
  book: Book | null;
  books: Book[];
  loading: boolean;
  error: string | null;

  getBooks: () => Promise<void>;
  getBooksByCategory: (id_categoria: string) => Promise<void>;
  getBook: (id: string) => Promise<void>;
  addBook: (book: Book) => Promise<void>;
}

export function useBook(): UseBookProps {
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState<Book | null>(null);
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);

  const collectionName = collection(db, "book");

  const getBooks = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      const dataDB = await getDocs(collectionName);
      const data = dataDB.docs.map((bookDB) => {
        return { id: bookDB.id, ...bookDB.data() } as Book;
      });

      setBooks(data);
    } catch (error) {
      setError("Error al obtener los libros");
    } finally {
      setLoading(false);
    }
  };

  const getBooksByCategory = async (id_categoria: string): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      const q = query(
        collectionName,
        where("id_categories", "array-contains", id_categoria)
      );
      const dataDB = await getDocs(q);
      const data = dataDB.docs.map((bookDB) => {
        return { id: bookDB.id, ...bookDB.data() } as Book;
      });

      setBooks(data);
      console.log(data);
    } catch (error) {
      setError("Error al obtener los libros");
    } finally {
      setLoading(false);
    }
  };

  const getBook = async (id: string): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      const bookDB = await getDocs(collectionName);
      const data = bookDB.docs.map((bookDB) => {
        return { id: bookDB.id, ...bookDB.data() } as Book;
      });

      const book = data.find((book) => book.id === id);
      setBook(book || null);
    } catch (error) {
      setError("Error al obtener el libro");
    } finally {
      setLoading(false);
    }
  };

  const addBook = async (book: Book): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      // Excluir el campo `id` del objeto antes de enviarlo
      const { id, ...bookData } = book;

      await addDoc(collectionName, bookData);
    } catch (error) {
      setError("Error al agregar el libro");
    } finally {
      setLoading(false);
    }
  };

  return {
    book,
    books,
    loading,
    error,
    getBook,
    getBooks,
    getBooksByCategory,
    addBook,
  };
}
