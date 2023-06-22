import { Member as TMember } from "../api/member/Member";

export const MEMBER_TITLE_FIELD = "fname";

export const MemberTitle = (record: TMember): string => {
  return record.fname || String(record.id);
};
