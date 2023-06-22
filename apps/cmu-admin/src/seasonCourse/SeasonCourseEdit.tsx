import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { CourseTitle } from "../course/CourseTitle";
import { SeasonTitle } from "../season/SeasonTitle";

export const SeasonCourseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="course.id" reference="Course" label="Course">
          <SelectInput optionText={CourseTitle} />
        </ReferenceInput>
        <DateTimeInput label="Created At" source="createdAt" />
        <ReferenceInput source="season.id" reference="Season" label="Season">
          <SelectInput optionText={SeasonTitle} />
        </ReferenceInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
