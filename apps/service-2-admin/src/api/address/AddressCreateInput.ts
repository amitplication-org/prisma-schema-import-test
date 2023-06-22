import { CustomerCreateNestedManyWithoutAddressesInput } from "./CustomerCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  address_1: string;
  address_2: string;
  city: string;
  customers?: CustomerCreateNestedManyWithoutAddressesInput;
  state: string;
  zip: number;
};
