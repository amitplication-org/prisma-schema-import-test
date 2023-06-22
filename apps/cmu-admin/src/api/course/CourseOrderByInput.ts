import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  clubId?: SortOrder;
  courseName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
