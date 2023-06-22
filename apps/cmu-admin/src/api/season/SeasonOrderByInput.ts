import { SortOrder } from "../../util/SortOrder";

export type SeasonOrderByInput = {
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  midseasonDate?: SortOrder;
  name?: SortOrder;
  numTeams?: SortOrder;
  playersPerTeam?: SortOrder;
  scheduleCreated?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
