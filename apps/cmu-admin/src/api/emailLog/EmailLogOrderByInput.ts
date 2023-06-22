import { SortOrder } from "../../util/SortOrder";

export type EmailLogOrderByInput = {
  date?: SortOrder;
  id?: SortOrder;
  recipient?: SortOrder;
  speakerName?: SortOrder;
  status?: SortOrder;
  subject?: SortOrder;
  title?: SortOrder;
};
