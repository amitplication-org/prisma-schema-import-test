import { ClubWhereUniqueInput } from "../club/ClubWhereUniqueInput";
import { CourseRatingCreateNestedManyWithoutCoursesInput } from "./CourseRatingCreateNestedManyWithoutCoursesInput";
import { CourseTeetypeCreateNestedManyWithoutCoursesInput } from "./CourseTeetypeCreateNestedManyWithoutCoursesInput";
import { SeasonCourseCreateNestedManyWithoutCoursesInput } from "./SeasonCourseCreateNestedManyWithoutCoursesInput";
import { TeeCreateNestedManyWithoutCoursesInput } from "./TeeCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  club: ClubWhereUniqueInput;
  courseName: string;
  courseRating?: CourseRatingCreateNestedManyWithoutCoursesInput;
  courseTeetype?: CourseTeetypeCreateNestedManyWithoutCoursesInput;
  createdAt?: Date | null;
  seasonCourse?: SeasonCourseCreateNestedManyWithoutCoursesInput;
  tee?: TeeCreateNestedManyWithoutCoursesInput;
  updatedAt?: Date | null;
};
