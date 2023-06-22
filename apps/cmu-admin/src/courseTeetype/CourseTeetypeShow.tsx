import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { COURSE_TITLE_FIELD } from "../course/CourseTitle";

export const CourseTeetypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Course" source="course.id" reference="Course">
          <TextField source={COURSE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Created At" source="createdAt" />
        <TextField label="Id" source="id" />
        <TextField label="Tee Id" source="teeId" />
        <TextField label="Tee Type" source="teeType" />
        <TextField label="Updated At" source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
