import { Score as TScore } from "../api/score/Score";

export const SCORE_TITLE_FIELD = "firstname";

export const ScoreTitle = (record: TScore): string => {
  return record.firstname || String(record.id);
};
