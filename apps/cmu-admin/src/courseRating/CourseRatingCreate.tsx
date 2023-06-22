import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CourseTitle } from "../course/CourseTitle";

export const CourseRatingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Back Par" source="backPar" />
        <NumberInput label="Back Rating" source="backRating" />
        <NumberInput label="Back Slope" source="backSlope" />
        <ReferenceInput source="course.id" reference="Course" label="Course">
          <SelectInput optionText={CourseTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Course Par" source="coursePar" />
        <NumberInput label="Course Rating" source="courseRating" />
        <NumberInput label="Course Slope" source="courseSlope" />
        <DateTimeInput label="Created At" source="createdAt" />
        <NumberInput step={1} label="Front Par" source="frontPar" />
        <NumberInput label="Front Rating" source="frontRating" />
        <NumberInput label="Front Slope" source="frontSlope" />
        <TextInput label="Tee" source="tee" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
