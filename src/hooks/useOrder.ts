import { useState } from "react";
import { Order } from "../types/order";
import { addDoc, collection } from "firebase/firestore";
import db from "../db/db";

interface UseOrderProps {
  loading: boolean;
  error: string | null;

  createOrder: (order: Order) => Promise<string>;
}

export function useOrder(): UseOrderProps {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const collectionName = collection(db, "orders");

  const createOrder = async (orderData: Order): Promise<string> => {
    try {
      setLoading(true);
      setError(null);

      const { id, ...orderWithoutId } = orderData;
      const response = await addDoc(collectionName, orderWithoutId);

      return response.id;
    } catch (error) {
      setError("Error al crear la orden");
      return "";
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    createOrder,
  };
}
