import { Course } from "../course/Course";
import { Season } from "../season/Season";

export type SeasonCourse = {
  course?: Course;
  createdAt: Date | null;
  id: number | null;
  season?: Season;
  updatedAt: Date | null;
};
