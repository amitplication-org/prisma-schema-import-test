import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const RandomplayerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Fname" source="fname" />
        <TextInput label="Lname" source="lname" />
        <NumberInput step={1} label="Randomplayer Id" source="RandomplayerId" />
      </SimpleForm>
    </Edit>
  );
};
