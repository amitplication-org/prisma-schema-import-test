import { Member } from "../member/Member";
import { Season } from "../season/Season";
import { Teamscore } from "../teamscore/Teamscore";

export type Team = {
  createdAt: Date | null;
  id: number | null;
  members?: Member | null;
  playerRank: number | null;
  season?: Season | null;
  sub: number;
  teamId: number | null;
  teamscore?: Array<Teamscore>;
  updatedAt: Date;
};
