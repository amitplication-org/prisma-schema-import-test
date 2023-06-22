import { Course } from "../course/Course";

export type Club = {
  course?: Array<Course>;
  createdAt: Date | null;
  id: number | null;
  name: string;
  updatedAt: Date | null;
};
