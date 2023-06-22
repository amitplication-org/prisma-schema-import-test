import { Customer } from "../customer/Customer";

export type Address = {
  address_1: string;
  address_2: string;
  city: string;
  createdAt: Date | null;
  customers?: Array<Customer>;
  id: string | null;
  state: string;
  updatedAt: Date | null;
  zip: number;
};
