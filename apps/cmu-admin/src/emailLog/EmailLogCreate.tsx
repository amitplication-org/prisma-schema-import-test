import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EmailLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Recipient" source="recipient" />
        <TextInput label="Speaker Name" source="speakerName" />
        <TextInput label="Status" source="status" />
        <TextInput label="Subject" source="subject" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
