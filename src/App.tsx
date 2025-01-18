import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import NavBar from "./components/Navbar";
import CategoriesPage from "./pages/categories";
import BookDetail from "./pages/book-detail";
import CategoriesProductsPage from "./pages/categories-products";
import CRUD from "./pages/CRUD";
import CheckoutPage from "./pages/Checkout";
import { NotFound } from "./pages/NotFound";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<CategoriesPage />} />
          <Route
            path="/categorias/:id_categoria"
            element={<CategoriesProductsPage />}
          />
          <Route path="/libro/:id_libro" element={<BookDetail />} />
          <Route path="/CRUD" element={<CRUD />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
