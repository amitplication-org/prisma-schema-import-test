import { ClubWhereUniqueInput } from "../club/ClubWhereUniqueInput";
import { CourseRatingUpdateManyWithoutCoursesInput } from "./CourseRatingUpdateManyWithoutCoursesInput";
import { CourseTeetypeUpdateManyWithoutCoursesInput } from "./CourseTeetypeUpdateManyWithoutCoursesInput";
import { SeasonCourseUpdateManyWithoutCoursesInput } from "./SeasonCourseUpdateManyWithoutCoursesInput";
import { TeeUpdateManyWithoutCoursesInput } from "./TeeUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  club?: ClubWhereUniqueInput;
  courseName?: string;
  courseRating?: CourseRatingUpdateManyWithoutCoursesInput;
  courseTeetype?: CourseTeetypeUpdateManyWithoutCoursesInput;
  createdAt?: Date | null;
  seasonCourse?: SeasonCourseUpdateManyWithoutCoursesInput;
  tee?: TeeUpdateManyWithoutCoursesInput;
  updatedAt?: Date | null;
};
