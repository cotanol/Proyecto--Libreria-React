import { Buyer } from "../../types/buyer";

interface BuyerFormProps {
  buyer: Buyer;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitBuyerForm: (e: React.FormEvent<HTMLFormElement>) => void;
}

const BuyerForm = ({
  buyer,
  handleChangeInput,
  handleSubmitBuyerForm,
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
