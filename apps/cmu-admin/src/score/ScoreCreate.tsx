import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

import { MemberTitle } from "../member/MemberTitle";
import { ScheduleTitle } from "../schedule/ScheduleTitle";

export const ScoreCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Back" source="back" />
        <NumberInput step={1} label="Bhndcp" source="bhndcp" />
        <NumberInput step={1} label="Bnet" source="bnet" />
        <NumberInput step={1} label="Fhndcp" source="fhndcp" />
        <TextInput label="Firstname" source="firstname" />
        <NumberInput step={1} label="Fnet" source="fnet" />
        <NumberInput step={1} label="Front" source="front" />
        <NumberInput step={1} label="H1" source="h1" />
        <NumberInput step={1} label="H10" source="h10" />
        <NumberInput step={1} label="H11" source="h11" />
        <NumberInput step={1} label="H12" source="h12" />
        <NumberInput step={1} label="H13" source="h13" />
        <NumberInput step={1} label="H14" source="h14" />
        <NumberInput step={1} label="H15" source="h15" />
        <NumberInput step={1} label="H16" source="h16" />
        <NumberInput step={1} label="H17" source="h17" />
        <NumberInput step={1} label="H18" source="h18" />
        <NumberInput step={1} label="H2" source="h2" />
        <NumberInput step={1} label="H3" source="h3" />
        <NumberInput step={1} label="H4" source="h4" />
        <NumberInput step={1} label="H5" source="h5" />
        <NumberInput step={1} label="H6" source="h6" />
        <NumberInput step={1} label="H7" source="h7" />
        <NumberInput step={1} label="H8" source="h8" />
        <NumberInput step={1} label="H9" source="h9" />
        <TextInput label="Lastname" source="lastname" />
        <ReferenceInput source="members.id" reference="Member" label="Members">
          <SelectInput optionText={MemberTitle} />
        </ReferenceInput>
        <TextInput label="Nine Played" source="ninePlayed" />
        <BooleanInput label="Press" source="press" />
        <ReferenceInput
          source="schedule.id"
          reference="Schedule"
          label="Schedule"
        >
          <SelectInput optionText={ScheduleTitle} />
        </ReferenceInput>
        <DateTimeInput label="Score Date" source="scoreDate" />
      </SimpleForm>
    </Create>
  );
};
