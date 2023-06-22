import { InputJsonValue } from "../../types";

export type AdminCreateInput = {
  firstName: string;
  lastName: string;
  password?: string | null;
  roles?: InputJsonValue;
  username?: string | null;
};
