import { Customer } from "../customer/Customer";

export type SomeThing = {
  createdAt: Date | null;
  customer?: Customer | null;
  id: string | null;
  updatedAt: Date | null;
};
