import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type CourseTeetypeCreateInput = {
  course: CourseWhereUniqueInput;
  createdAt?: Date | null;
  teeId: number;
  teeType: "MEN" | "SENIOR" | "LADIES";
  updatedAt?: Date | null;
};
