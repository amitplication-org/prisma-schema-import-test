import { MatchscoreCreateNestedManyWithoutSchedulesInput } from "./MatchscoreCreateNestedManyWithoutSchedulesInput";
import { ScoreCreateNestedManyWithoutSchedulesInput } from "./ScoreCreateNestedManyWithoutSchedulesInput";

export type ScheduleCreateInput = {
  dateOfPlay?: Date | null;
  idPlayer1?: number | null;
  idPlayer2?: number | null;
  idTeam1?: number | null;
  idTeam2?: number | null;
  matchscore?: MatchscoreCreateNestedManyWithoutSchedulesInput;
  scores?: ScoreCreateNestedManyWithoutSchedulesInput;
  updatedAt: Date;
};
