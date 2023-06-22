import { InputJsonValue } from "../../types";

export type AdminUpdateInput = {
  firstName?: string;
  lastName?: string;
  password?: string | null;
  roles?: InputJsonValue;
  username?: string | null;
};
