import { useState } from "react";
import type { Contact } from "../types/contact";
import { addDoc, collection } from "firebase/firestore";
import db from "../db/db";

interface UseContactProps {
  contact: Contact | null;
  loading: boolean;
  error: string | null;

  createContact: (contact: Contact) => Promise<void>;
}

export function useContact(): UseContactProps {
  const [loading, setLoading] = useState(true);
  const [contact, setContact] = useState<Contact | null>(null);
  const [error, setError] = useState<string | null>(null);

  const collectionName = collection(db, "contacts");

  const createContact = async (contact: Contact): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      setContact(null);

      const { id, ...contactWithoutId } = contact;

      await addDoc(collectionName, contactWithoutId);
      setContact(contact);
    } catch (error) {
      setError("Error al crear la orden");
    } finally {
      setLoading(false);
    }
  };

  return {
    contact,
    loading,
    error,
    createContact,
  };
}
