import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { HoleUpdateManyWithoutTeesInput } from "./HoleUpdateManyWithoutTeesInput";

export type TeeUpdateInput = {
  brating?: number;
  bslope?: number;
  course?: CourseWhereUniqueInput | null;
  createdAt?: Date | null;
  frating?: number;
  fslope?: number;
  gender?: "M" | "F";
  hole?: HoleUpdateManyWithoutTeesInput;
  name?: string | null;
  par?: number;
  rating?: number;
  slope?: number;
  updatedAt?: Date | null;
};
