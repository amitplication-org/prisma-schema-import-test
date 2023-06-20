import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string;
  itemPrice?: number;
  name?: string;
  orders?: OrderUpdateManyWithoutProductsInput;
};
