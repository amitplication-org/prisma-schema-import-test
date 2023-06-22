import { SeasonCourseCreateNestedManyWithoutSeasonsInput } from "./SeasonCourseCreateNestedManyWithoutSeasonsInput";
import { TeamCreateNestedManyWithoutSeasonsInput } from "./TeamCreateNestedManyWithoutSeasonsInput";

export type SeasonCreateInput = {
  endDate: Date;
  midseasonDate: Date;
  name?: string | null;
  numTeams: number;
  playersPerTeam: number;
  scheduleCreated: number;
  seasonCourse?: SeasonCourseCreateNestedManyWithoutSeasonsInput;
  startDate: Date;
  team?: TeamCreateNestedManyWithoutSeasonsInput;
};
