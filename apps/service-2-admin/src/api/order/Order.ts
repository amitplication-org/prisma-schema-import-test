import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";

export type Order = {
  createdAt: Date | null;
  customer?: Customer;
  discount: number;
  id: string | null;
  product?: Product;
  quantity: number;
  status?: "PENDING" | "COMPLETED" | "CANCELLED";
  totalPrice: number;
  updatedAt: Date | null;
};
