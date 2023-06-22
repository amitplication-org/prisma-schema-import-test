import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";
import { SomeThingWhereUniqueInput } from "../someThing/SomeThingWhereUniqueInput";

export type CustomerCreateInput = {
  address: AddressWhereUniqueInput;
  customerType: "INDIVIDUAL" | "COMPANY";
  email: string;
  firstName: string;
  lastName: string;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  phone: string;
  someThing: SomeThingWhereUniqueInput | null;
};
