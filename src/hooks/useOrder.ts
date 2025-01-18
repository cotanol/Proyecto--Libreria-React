import { useState } from "react";
import { Order } from "../types/order";
import { addDoc, collection } from "firebase/firestore";
import db from "../db/db";

interface UseOrderProps {
  order: Order | null;
  loading: boolean;
  error: string | null;

  createOrder: (order: Order) => Promise<void>;
}

export function useOrder(): UseOrderProps {
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState<Order | null>(null);
  const [error, setError] = useState<string | null>(null);

  const collectionName = collection(db, "orders");

  const createOrder = async (order: Order): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      setOrder(null);

      const { id, ...orderWithoutId } = order;

      await addDoc(collectionName, orderWithoutId);
      setOrder(order);
    } catch (error) {
      setError("Error al crear la orden");
    } finally {
      setLoading(false);
    }
  };

  return {
    order,
    loading,
    error,
    createOrder,
  };
}
