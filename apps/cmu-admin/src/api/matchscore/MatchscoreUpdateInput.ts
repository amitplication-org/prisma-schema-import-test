import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";
import { ScheduleWhereUniqueInput } from "../schedule/ScheduleWhereUniqueInput";

export type MatchscoreUpdateInput = {
  members?: MemberWhereUniqueInput | null;
  playerPoints?: number;
  schedule?: ScheduleWhereUniqueInput | null;
  teamId?: number | null;
};
