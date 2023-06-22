import { CustomerUpdateManyWithoutAddressesInput } from "./CustomerUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  address_1?: string;
  address_2?: string;
  city?: string;
  customers?: CustomerUpdateManyWithoutAddressesInput;
  state?: string;
  zip?: number;
};
