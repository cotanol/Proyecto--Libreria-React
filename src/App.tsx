import { useState } from 'react';
import { Book } from './types/book';
import { BookCard } from './components/BookCard';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

// Sample book data con imágenes reales
const sampleBooks: Book[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 9.99,
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Una historia de decadencia y exceso que explora los aspectos más oscuros del Sueño Americano."
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    price: 12.99,
    coverImage: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Una novela distópica de ciencia ficción social y una historia cautivadora."
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 8.99,
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Una novela romántica que explora las costumbres y la dependencia de las mujeres del matrimonio en la época georgiana."
  },
  {
    id: 4,
    title: "Don Quijote",
    author: "Miguel de Cervantes",
    price: 14.99,
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "La obra maestra de la literatura española que sigue las aventuras del ingenioso hidalgo Don Quijote de la Mancha."
  },
  {
    id: 5,
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    price: 11.99,
    coverImage: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Una obra maestra del realismo mágico que narra la historia de la familia Buendía."
  },
  {
    id: 6,
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    price: 7.99,
    coverImage: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Una historia poética que explora temas de amor, pérdida y la importancia de mantener vivo el niño interior."
  }
];

function App() {
  const [cartItems, setCartItems] = useState<Book[]>([]);

  const handleAddToCart = (book: Book) => {
    setCartItems([...cartItems, book]);
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartItems={cartItems.length} cartTotal={cartTotal} />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8" id="books">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nuestros Libros Destacados</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sampleBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>

      <footer className="bg-indigo-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-indigo-200">© 2024 BookStore. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;