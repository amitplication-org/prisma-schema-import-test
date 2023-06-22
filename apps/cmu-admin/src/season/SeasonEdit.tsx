import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SeasonCourseTitle } from "../seasonCourse/SeasonCourseTitle";
import { TeamTitle } from "../team/TeamTitle";

export const SeasonEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="End Date" source="endDate" />
        <DateTimeInput label="Midseason Date" source="midseasonDate" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Num Teams" source="numTeams" />
        <NumberInput
          step={1}
          label="Players Per Team"
          source="playersPerTeam"
        />
        <NumberInput
          step={1}
          label="Schedule Created"
          source="scheduleCreated"
        />
        <ReferenceArrayInput
          source="seasonCourse"
          reference="SeasonCourse"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SeasonCourseTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Start Date" source="startDate" />
        <ReferenceArrayInput
          source="team"
          reference="Team"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TeamTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
