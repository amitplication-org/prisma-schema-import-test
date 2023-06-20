import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderCreateInput = {
  customer: CustomerWhereUniqueInput;
  discount: number;
  product: ProductWhereUniqueInput;
  quantity: number;
  status: "PENDING" | "COMPLETED" | "CANCELLED";
  totalPrice: number;
};
