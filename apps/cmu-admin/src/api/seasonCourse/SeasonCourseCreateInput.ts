import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { SeasonWhereUniqueInput } from "../season/SeasonWhereUniqueInput";

export type SeasonCourseCreateInput = {
  course: CourseWhereUniqueInput;
  createdAt?: Date | null;
  season: SeasonWhereUniqueInput;
  updatedAt?: Date | null;
};
