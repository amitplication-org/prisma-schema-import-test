import { Course } from "../course/Course";

export type CourseRating = {
  backPar: number;
  backRating: number;
  backSlope: number;
  course?: Course;
  coursePar: number;
  courseRating: number;
  courseSlope: number;
  createdAt: Date | null;
  frontPar: number;
  frontRating: number;
  frontSlope: number;
  id: number | null;
  tee: string;
  updatedAt: Date | null;
};
