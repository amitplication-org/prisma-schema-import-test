import { MatchscoreCreateNestedManyWithoutMembersInput } from "./MatchscoreCreateNestedManyWithoutMembersInput";
import { ScoreCreateNestedManyWithoutMembersInput } from "./ScoreCreateNestedManyWithoutMembersInput";
import { TeamCreateNestedManyWithoutMembersInput } from "./TeamCreateNestedManyWithoutMembersInput";

export type MemberCreateInput = {
  active: string;
  createdAt?: Date | null;
  email?: string | null;
  fname?: string | null;
  ghin: string;
  lname?: string | null;
  matchscore?: MatchscoreCreateNestedManyWithoutMembersInput;
  scores?: ScoreCreateNestedManyWithoutMembersInput;
  team?: TeamCreateNestedManyWithoutMembersInput;
  tee: "MEN" | "SENIOR" | "LADIES";
  updatedAt?: Date | null;
};
