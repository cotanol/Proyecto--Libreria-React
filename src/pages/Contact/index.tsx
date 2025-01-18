import FormContact from "./FormContact";
import type { Contact } from "../../types/contact";

import { useState } from "react";
import { useContact } from "../../hooks/useContact";

export function Contact() {
  const { createContact } = useContact();

  const [dataContact, setDataContact] = useState<Contact>({
    id: "",
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChangeInput = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setDataContact({
      ...dataContact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitContactForm = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      !dataContact.name.trim() ||
      !dataContact.email.trim() ||
      !dataContact.subject.trim() ||
      !dataContact.message.trim()
    ) {
      alert("Por favor, completa todos los campos requeridos.");
      return;
    }

    await createContact(dataContact);
    alert("¡Gracias por contactarnos! Te responderemos pronto.");
    setDataContact({
      id: "",
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Contacto</h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. ¡Contáctanos!
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <FormContact
            handleChangeInput={handleChangeInput}
            handleSubmitContactForm={handleSubmitContactForm}
            contact={dataContact}
          />

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 mx-auto">
                <svg
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-2 text-base text-gray-500">
                soporte@bookstore.com
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 mx-auto">
                <svg
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Teléfono
              </h3>
              <p className="mt-2 text-base text-gray-500">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
