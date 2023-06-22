import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";
import { ScheduleWhereUniqueInput } from "../schedule/ScheduleWhereUniqueInput";

export type MatchscoreCreateInput = {
  members?: MemberWhereUniqueInput | null;
  playerPoints: number;
  schedule?: ScheduleWhereUniqueInput | null;
  teamId?: number | null;
};
