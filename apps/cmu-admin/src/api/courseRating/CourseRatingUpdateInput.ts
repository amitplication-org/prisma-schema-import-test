import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type CourseRatingUpdateInput = {
  backPar?: number;
  backRating?: number;
  backSlope?: number;
  course?: CourseWhereUniqueInput;
  coursePar?: number;
  courseRating?: number;
  courseSlope?: number;
  createdAt?: Date | null;
  frontPar?: number;
  frontRating?: number;
  frontSlope?: number;
  tee?: string;
  updatedAt?: Date | null;
};
