import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { SeasonWhereUniqueInput } from "../season/SeasonWhereUniqueInput";

export type SeasonCourseUpdateInput = {
  course?: CourseWhereUniqueInput;
  createdAt?: Date | null;
  season?: SeasonWhereUniqueInput;
  updatedAt?: Date | null;
};
