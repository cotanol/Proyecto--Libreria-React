import { Link, useParams } from "react-router-dom";

const OrderPage = () => {
  const { id_orden } = useParams();

  return (
    <div className="max-w-7xl mx-auto h-screen flex flex-col items-center justify-center bg-gray-50 px-4 gap-6">
      <h1 className="text-4xl font-bold text-gray-800">Order Page</h1>
      <p className="text-lg text-gray-600">
        Apunta tu número de orden:{" "}
        <span className="font-semibold text-indigo-600">{id_orden}</span>
      </p>
      <Link
        to="/"
        className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        Volver al menú principal
      </Link>
    </div>
  );
};

export default OrderPage;
