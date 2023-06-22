import { Order } from "../order/Order";

export type Product = {
  createdAt: Date | null;
  description: string;
  id: string | null;
  itemPrice: number;
  name: string;
  orders?: Array<Order>;
  updatedAt: Date | null;
};
