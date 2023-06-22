import { SortOrder } from "../../util/SortOrder";

export type ScheduleOrderByInput = {
  createdAt?: SortOrder;
  dateOfPlay?: SortOrder;
  id?: SortOrder;
  idPlayer1?: SortOrder;
  idPlayer2?: SortOrder;
  idTeam1?: SortOrder;
  idTeam2?: SortOrder;
  updatedAt?: SortOrder;
};
