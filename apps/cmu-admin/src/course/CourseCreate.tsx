import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { ClubTitle } from "../club/ClubTitle";
import { CourseRatingTitle } from "../courseRating/CourseRatingTitle";
import { CourseTeetypeTitle } from "../courseTeetype/CourseTeetypeTitle";
import { SeasonCourseTitle } from "../seasonCourse/SeasonCourseTitle";
import { TeeTitle } from "../tee/TeeTitle";

export const CourseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="club.id" reference="Club" label="Club">
          <SelectInput optionText={ClubTitle} />
        </ReferenceInput>
        <TextInput label="Course Name" source="courseName" />
        <ReferenceArrayInput
          source="courseRating"
          reference="CourseRating"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CourseRatingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="courseTeetype"
          reference="CourseTeetype"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CourseTeetypeTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Created At" source="createdAt" />
        <ReferenceArrayInput
          source="seasonCourse"
          reference="SeasonCourse"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SeasonCourseTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tee"
          reference="Tee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TeeTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
