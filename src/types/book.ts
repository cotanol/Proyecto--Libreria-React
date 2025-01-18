export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  coverImage: string;
  description: string;
  id_categories: string[];
}

export interface CartItem extends Book {
  quantity: number;
}
