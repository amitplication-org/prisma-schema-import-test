import { CourseUpdateManyWithoutClubsInput } from "./CourseUpdateManyWithoutClubsInput";

export type ClubUpdateInput = {
  course?: CourseUpdateManyWithoutClubsInput;
  createdAt?: Date | null;
  name?: string;
  updatedAt?: Date | null;
};
