import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const RandomplayerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Fname" source="fname" />
        <TextInput label="Lname" source="lname" />
        <NumberInput step={1} label="Randomplayer Id" source="RandomplayerId" />
      </SimpleForm>
    </Create>
  );
};
