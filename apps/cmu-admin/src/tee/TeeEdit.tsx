import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CourseTitle } from "../course/CourseTitle";
import { HoleTitle } from "../hole/HoleTitle";

export const TeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Brating" source="brating" />
        <NumberInput label="Bslope" source="bslope" />
        <ReferenceInput source="course.id" reference="Course" label="Course">
          <SelectInput optionText={CourseTitle} />
        </ReferenceInput>
        <DateTimeInput label="Created At" source="createdAt" />
        <NumberInput label="Frating" source="frating" />
        <NumberInput label="Fslope" source="fslope" />
        <SelectInput
          source="gender"
          label="Gender"
          choices={[
            { label: "M", value: "M" },
            { label: "F", value: "F" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="hole"
          reference="Hole"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HoleTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Par" source="par" />
        <NumberInput label="Rating" source="rating" />
        <NumberInput label="Slope" source="slope" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
