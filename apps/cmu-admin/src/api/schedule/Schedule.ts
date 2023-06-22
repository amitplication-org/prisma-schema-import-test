import { Matchscore } from "../matchscore/Matchscore";
import { Score } from "../score/Score";

export type Schedule = {
  createdAt: Date | null;
  dateOfPlay: Date | null;
  id: number | null;
  idPlayer1: number | null;
  idPlayer2: number | null;
  idTeam1: number | null;
  idTeam2: number | null;
  matchscore?: Array<Matchscore>;
  scores?: Array<Score>;
  updatedAt: Date;
};
