import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type TeamscoreUpdateInput = {
  dateOfPlay?: Date;
  points?: number;
  team?: TeamWhereUniqueInput | null;
  teamIid?: number;
};
