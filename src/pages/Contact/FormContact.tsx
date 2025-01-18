import { Contact } from "../../types/contact";

interface FormContactProps {
  contact: Contact;
  handleChangeInput: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  handleSubmitContactForm: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormContact = ({
  contact,
  handleChangeInput,
  handleSubmitContactForm,
}: FormContactProps) => {
  return (
    <form className="space-y-6" onSubmit={handleSubmitContactForm}>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={contact.name}
          onChange={handleChangeInput}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={contact.email}
          onChange={handleChangeInput}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700"
        >
          Asunto
        </label>
        <select
          id="subject"
          name="subject"
          value={contact.subject}
          onChange={handleChangeInput}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option>Consulta general</option>
          <option>Pedidos</option>
          <option>Devoluciones</option>
          <option>Soporte técnico</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={contact.message}
          onChange={handleChangeInput}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="¿En qué podemos ayudarte?"
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Enviar mensaje
        </button>
      </div>
    </form>
  );
};

export default FormContact;
