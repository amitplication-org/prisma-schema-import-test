import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { HoleCreateNestedManyWithoutTeesInput } from "./HoleCreateNestedManyWithoutTeesInput";

export type TeeCreateInput = {
  brating: number;
  bslope: number;
  course?: CourseWhereUniqueInput | null;
  createdAt?: Date | null;
  frating: number;
  fslope: number;
  gender: "M" | "F";
  hole?: HoleCreateNestedManyWithoutTeesInput;
  name?: string | null;
  par: number;
  rating: number;
  slope: number;
  updatedAt?: Date | null;
};
