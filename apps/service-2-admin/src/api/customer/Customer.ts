import { Address } from "../address/Address";
import { Order } from "../order/Order";
import { SomeThing } from "../someThing/SomeThing";

export type Customer = {
  address?: Address;
  createdAt: Date | null;
  customerType?: "INDIVIDUAL" | "COMPANY";
  email: string;
  firstName: string;
  id: string | null;
  lastName: string;
  orders?: Array<Order>;
  phone: string;
  someThing?: SomeThing | null;
  updatedAt: Date | null;
};
