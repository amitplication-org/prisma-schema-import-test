import { JsonValue } from "type-fest";

export type Admin = {
  createdAt: Date | null;
  firstName: string;
  id: string | null;
  lastName: string;
  password: string | null;
  roles: JsonValue;
  updatedAt: Date | null;
  username: string | null;
};
