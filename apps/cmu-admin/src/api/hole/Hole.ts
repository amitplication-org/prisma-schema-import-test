import { Tee } from "../tee/Tee";

export type Hole = {
  createdAt: Date | null;
  handicap: number;
  holeNumber: number;
  id: number | null;
  length: number;
  par: number;
  tee?: Tee;
  updatedAt: Date | null;
};
