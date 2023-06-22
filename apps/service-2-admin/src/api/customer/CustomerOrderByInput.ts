import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  addressId?: SortOrder;
  createdAt?: SortOrder;
  customerType?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  phone?: SortOrder;
  someThingId?: SortOrder;
  updatedAt?: SortOrder;
};
