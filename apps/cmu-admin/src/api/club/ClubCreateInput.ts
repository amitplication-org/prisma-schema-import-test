import { CourseCreateNestedManyWithoutClubsInput } from "./CourseCreateNestedManyWithoutClubsInput";

export type ClubCreateInput = {
  course?: CourseCreateNestedManyWithoutClubsInput;
  createdAt?: Date | null;
  name: string;
  updatedAt?: Date | null;
};
