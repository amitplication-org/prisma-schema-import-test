import { Randomplayer as TRandomplayer } from "../api/randomplayer/Randomplayer";

export const RANDOMPLAYER_TITLE_FIELD = "fname";

export const RandomplayerTitle = (record: TRandomplayer): string => {
  return record.fname || String(record.id);
};
