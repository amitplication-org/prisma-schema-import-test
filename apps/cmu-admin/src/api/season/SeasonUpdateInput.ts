import { SeasonCourseUpdateManyWithoutSeasonsInput } from "./SeasonCourseUpdateManyWithoutSeasonsInput";
import { TeamUpdateManyWithoutSeasonsInput } from "./TeamUpdateManyWithoutSeasonsInput";

export type SeasonUpdateInput = {
  endDate?: Date;
  midseasonDate?: Date;
  name?: string | null;
  numTeams?: number;
  playersPerTeam?: number;
  scheduleCreated?: number;
  seasonCourse?: SeasonCourseUpdateManyWithoutSeasonsInput;
  startDate?: Date;
  team?: TeamUpdateManyWithoutSeasonsInput;
};
