import { SortOrder } from "../../util/SortOrder";

export type TeamOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  membersId?: SortOrder;
  playerRank?: SortOrder;
  seasonId?: SortOrder;
  sub?: SortOrder;
  teamId?: SortOrder;
  updatedAt?: SortOrder;
};
