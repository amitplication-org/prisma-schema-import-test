import { SortOrder } from "../../util/SortOrder";

export type MatchscoreOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  membersId?: SortOrder;
  playerPoints?: SortOrder;
  scheduleId?: SortOrder;
  teamId?: SortOrder;
  updatedAt?: SortOrder;
};
