import { Club } from "../club/Club";
import { CourseRating } from "../courseRating/CourseRating";
import { CourseTeetype } from "../courseTeetype/CourseTeetype";
import { SeasonCourse } from "../seasonCourse/SeasonCourse";
import { Tee } from "../tee/Tee";

export type Course = {
  club?: Club;
  courseName: string;
  courseRating?: Array<CourseRating>;
  courseTeetype?: Array<CourseTeetype>;
  createdAt: Date | null;
  id: number | null;
  seasonCourse?: Array<SeasonCourse>;
  tee?: Array<Tee>;
  updatedAt: Date | null;
};
