import { Buyer } from "./buyer";
import { CartItem } from "./book";

export interface Order {
  id: string;
  buyer: Buyer;
  items: CartItem[];
  total: number;
}
