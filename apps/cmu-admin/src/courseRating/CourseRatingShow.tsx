import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { COURSE_TITLE_FIELD } from "../course/CourseTitle";

export const CourseRatingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Back Par" source="backPar" />
        <TextField label="Back Rating" source="backRating" />
        <TextField label="Back Slope" source="backSlope" />
        <ReferenceField label="Course" source="course.id" reference="Course">
          <TextField source={COURSE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Course Par" source="coursePar" />
        <TextField label="Course Rating" source="courseRating" />
        <TextField label="Course Slope" source="courseSlope" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Front Par" source="frontPar" />
        <TextField label="Front Rating" source="frontRating" />
        <TextField label="Front Slope" source="frontSlope" />
        <TextField label="Id" source="id" />
        <TextField label="Tee" source="tee" />
        <TextField label="Updated At" source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
