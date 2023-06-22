import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { CourseTitle } from "../course/CourseTitle";

export const CourseTeetypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="course.id" reference="Course" label="Course">
          <SelectInput optionText={CourseTitle} />
        </ReferenceInput>
        <DateTimeInput label="Created At" source="createdAt" />
        <NumberInput step={1} label="Tee Id" source="teeId" />
        <SelectInput
          source="teeType"
          label="Tee Type"
          choices={[
            { label: "MEN", value: "MEN" },
            { label: "SENIOR", value: "SENIOR" },
            { label: "LADIES", value: "LADIES" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
