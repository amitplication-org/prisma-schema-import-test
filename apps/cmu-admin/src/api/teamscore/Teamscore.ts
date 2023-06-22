import { Team } from "../team/Team";

export type Teamscore = {
  createdAt: Date | null;
  dateOfPlay: Date;
  id: number | null;
  points: number;
  team?: Team | null;
  teamIid: number;
  updatedAt: Date | null;
};
