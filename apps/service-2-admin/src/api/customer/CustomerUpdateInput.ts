import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";
import { SomeThingWhereUniqueInput } from "../someThing/SomeThingWhereUniqueInput";

export type CustomerUpdateInput = {
  address?: AddressWhereUniqueInput;
  customerType?: "INDIVIDUAL" | "COMPANY";
  email?: string;
  firstName?: string;
  lastName?: string;
  orders?: OrderUpdateManyWithoutCustomersInput;
  phone?: string;
  someThing?: SomeThingWhereUniqueInput | null;
};
