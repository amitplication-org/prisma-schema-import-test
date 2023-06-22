import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const HandicapHistoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Created At" source="createdAt" />
        <DateTimeInput label="Created Date" source="createdDate" />
        <TextInput label="Ghin Number" source="ghinNumber" />
        <NumberInput label="Gindex" source="gindex" />
        <TextInput label="Player Name" source="playerName" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
