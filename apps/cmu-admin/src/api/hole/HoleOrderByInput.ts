import { SortOrder } from "../../util/SortOrder";

export type HoleOrderByInput = {
  createdAt?: SortOrder;
  handicap?: SortOrder;
  holeNumber?: SortOrder;
  id?: SortOrder;
  length?: SortOrder;
  par?: SortOrder;
  teeId?: SortOrder;
  updatedAt?: SortOrder;
};
