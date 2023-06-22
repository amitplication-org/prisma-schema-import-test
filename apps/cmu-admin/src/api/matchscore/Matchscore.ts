import { Member } from "../member/Member";
import { Schedule } from "../schedule/Schedule";

export type Matchscore = {
  createdAt: Date | null;
  id: number | null;
  members?: Member | null;
  playerPoints: number;
  schedule?: Schedule | null;
  teamId: number | null;
  updatedAt: Date | null;
};
