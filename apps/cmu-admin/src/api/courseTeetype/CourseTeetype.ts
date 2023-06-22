import { Course } from "../course/Course";

export type CourseTeetype = {
  course?: Course;
  createdAt: Date | null;
  id: number | null;
  teeId: number;
  teeType?: "MEN" | "SENIOR" | "LADIES";
  updatedAt: Date | null;
};
