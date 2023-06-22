import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type TeamscoreCreateInput = {
  dateOfPlay: Date;
  points: number;
  team?: TeamWhereUniqueInput | null;
  teamIid: number;
};
