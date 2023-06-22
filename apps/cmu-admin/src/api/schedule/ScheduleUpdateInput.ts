import { MatchscoreUpdateManyWithoutSchedulesInput } from "./MatchscoreUpdateManyWithoutSchedulesInput";
import { ScoreUpdateManyWithoutSchedulesInput } from "./ScoreUpdateManyWithoutSchedulesInput";

export type ScheduleUpdateInput = {
  dateOfPlay?: Date | null;
  idPlayer1?: number | null;
  idPlayer2?: number | null;
  idTeam1?: number | null;
  idTeam2?: number | null;
  matchscore?: MatchscoreUpdateManyWithoutSchedulesInput;
  scores?: ScoreUpdateManyWithoutSchedulesInput;
  updatedAt?: Date;
};
