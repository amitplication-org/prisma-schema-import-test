import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";
import { SeasonWhereUniqueInput } from "../season/SeasonWhereUniqueInput";
import { TeamscoreUpdateManyWithoutTeamsInput } from "./TeamscoreUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  members?: MemberWhereUniqueInput | null;
  playerRank?: number | null;
  season?: SeasonWhereUniqueInput | null;
  sub?: number;
  teamId?: number | null;
  teamscore?: TeamscoreUpdateManyWithoutTeamsInput;
  updatedAt?: Date;
};
