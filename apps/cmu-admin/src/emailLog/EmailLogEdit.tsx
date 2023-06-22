import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EmailLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Recipient" source="recipient" />
        <TextInput label="Speaker Name" source="speakerName" />
        <TextInput label="Status" source="status" />
        <TextInput label="Subject" source="subject" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
