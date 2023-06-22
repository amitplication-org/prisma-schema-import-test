import { SeasonCourse } from "../seasonCourse/SeasonCourse";
import { Team } from "../team/Team";

export type Season = {
  createdAt: Date | null;
  endDate: Date;
  id: number | null;
  midseasonDate: Date;
  name: string | null;
  numTeams: number;
  playersPerTeam: number;
  scheduleCreated: number;
  seasonCourse?: Array<SeasonCourse>;
  startDate: Date;
  team?: Array<Team>;
  updatedAt: Date | null;
};
