import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TeeTitle } from "../tee/TeeTitle";

export const HoleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Created At" source="createdAt" />
        <NumberInput step={1} label="Handicap" source="handicap" />
        <NumberInput step={1} label="Hole Number" source="holeNumber" />
        <NumberInput step={1} label="Length" source="length" />
        <NumberInput step={1} label="Par" source="par" />
        <ReferenceInput source="tee.id" reference="Tee" label="Tee">
          <SelectInput optionText={TeeTitle} />
        </ReferenceInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
