import { Course } from "../course/Course";
import { Hole } from "../hole/Hole";

export type Tee = {
  brating: number;
  bslope: number;
  course?: Course | null;
  createdAt: Date | null;
  frating: number;
  fslope: number;
  gender?: "M" | "F";
  hole?: Array<Hole>;
  id: number | null;
  name: string | null;
  par: number;
  rating: number;
  slope: number;
  updatedAt: Date | null;
};
