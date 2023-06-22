import { SortOrder } from "../../util/SortOrder";

export type TeamCopyOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  playerId?: SortOrder;
  playerRank?: SortOrder;
  seasonId?: SortOrder;
  sub?: SortOrder;
  teamId?: SortOrder;
  updatedAt?: SortOrder;
};
