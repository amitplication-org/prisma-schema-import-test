import { TeeWhereUniqueInput } from "../tee/TeeWhereUniqueInput";

export type HoleCreateInput = {
  createdAt?: Date | null;
  handicap: number;
  holeNumber: number;
  length: number;
  par: number;
  tee: TeeWhereUniqueInput;
  updatedAt?: Date | null;
};
