import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description: string;
  itemPrice: number;
  name: string;
  orders?: OrderCreateNestedManyWithoutProductsInput;
};
