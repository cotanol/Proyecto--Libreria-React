import { Buyer } from "../../types/buyer";

interface BuyerFormProps {
  buyer: Buyer;
  confirmEmail: string;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeConfirmEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitBuyerForm: (e: React.FormEvent<HTMLFormElement>) => void;
  emailError: string | null; // Para mostrar un error si no coinciden los correos
}

const BuyerForm = ({
  buyer,
  confirmEmail,
  handleChangeInput,
  handleChangeConfirmEmail,
  handleSubmitBuyerForm,
  emailError,
}: BuyerFormProps) => {
  return (
    <form onSubmit={handleSubmitBuyerForm} className="grid grid-cols-1 gap-y-6">
      <input
        type="text"
        name="fullname"
        value={buyer.fullname}
        onChange={handleChangeInput}
        placeholder="Nombre completo"
      />
      <input
        type="text"
        name="phone"
        value={buyer.phone}
        onChange={handleChangeInput}
        placeholder="Teléfono"
      />
      <input
        type="email"
        name="email"
        value={buyer.email}
        onChange={handleChangeInput}
        placeholder="Correo electrónico"
      />
      <input
        type="email"
        name="confirmEmail"
        value={confirmEmail}
        onChange={handleChangeConfirmEmail}
        placeholder="Confirmar correo electrónico"
        required
      />
      {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
      <input
        type="text"
        name="direction"
        value={buyer.direction}
        onChange={handleChangeInput}
        placeholder="Dirección"
      />

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
      >
        Proceder al pago
      </button>
    </form>
  );
};

export default BuyerForm;
