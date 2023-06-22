import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";
import { SeasonWhereUniqueInput } from "../season/SeasonWhereUniqueInput";
import { TeamscoreCreateNestedManyWithoutTeamsInput } from "./TeamscoreCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  members?: MemberWhereUniqueInput | null;
  playerRank?: number | null;
  season?: SeasonWhereUniqueInput | null;
  sub: number;
  teamId?: number | null;
  teamscore?: TeamscoreCreateNestedManyWithoutTeamsInput;
  updatedAt: Date;
};
