import { Matchscore } from "../matchscore/Matchscore";
import { Score } from "../score/Score";
import { Team } from "../team/Team";

export type Member = {
  active: string;
  createdAt: Date | null;
  email: string | null;
  fname: string | null;
  ghin: string;
  id: number | null;
  lname: string | null;
  matchscore?: Array<Matchscore>;
  scores?: Array<Score>;
  team?: Array<Team>;
  tee?: "MEN" | "SENIOR" | "LADIES";
  updatedAt: Date | null;
};
