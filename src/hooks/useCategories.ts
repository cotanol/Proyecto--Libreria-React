import { useState } from "react";
import { Category } from "../types/category";
import { collection, getDocs } from "firebase/firestore";
import db from "../db/db";

interface UseCategoriesProps {
  categories: Category[];
  category: Category | null;
  loading: boolean;
  error: string | null;

  getCategories: () => Promise<void>;
  getCategoryById: (id: string) => Promise<void>;
}

export function useCategory(): UseCategoriesProps {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<Category | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);

  const collectionName = collection(db, "categories");

  const getCategories = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      const dataDB = await getDocs(collectionName);
      const data = dataDB.docs.map((categoryDB) => {
        return { id: categoryDB.id, ...categoryDB.data() } as Category;
      });

      setCategories(data);
    } catch (error) {
      setError("Error al obtener las categorías");
    } finally {
      setLoading(false);
    }
  };

  const getCategoryById = async (id: string): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      const categoryDB = await getDocs(collectionName);
      const data = categoryDB.docs.map((categoryDB) => {
        return { id: categoryDB.id, ...categoryDB.data() } as Category;
      });

      const category = data.find((category) => category.id === id);
      setCategory(category || null);
    } catch (error) {
      setError("Error al obtener la categoría");
    } finally {
      setLoading(false);
    }
  };

  return {
    categories,
    loading,
    error,
    getCategories,
    getCategoryById,
    category,
  };
}
