import { MatchscoreUpdateManyWithoutMembersInput } from "./MatchscoreUpdateManyWithoutMembersInput";
import { ScoreUpdateManyWithoutMembersInput } from "./ScoreUpdateManyWithoutMembersInput";
import { TeamUpdateManyWithoutMembersInput } from "./TeamUpdateManyWithoutMembersInput";

export type MemberUpdateInput = {
  active?: string;
  createdAt?: Date | null;
  email?: string | null;
  fname?: string | null;
  ghin?: string;
  lname?: string | null;
  matchscore?: MatchscoreUpdateManyWithoutMembersInput;
  scores?: ScoreUpdateManyWithoutMembersInput;
  team?: TeamUpdateManyWithoutMembersInput;
  tee?: "MEN" | "SENIOR" | "LADIES";
  updatedAt?: Date | null;
};
