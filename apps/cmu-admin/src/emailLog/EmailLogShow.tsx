import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const EmailLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Date" source="date" />
        <TextField label="Id" source="id" />
        <TextField label="Recipient" source="recipient" />
        <TextField label="Speaker Name" source="speakerName" />
        <TextField label="Status" source="status" />
        <TextField label="Subject" source="subject" />
        <TextField label="Title" source="title" />
      </SimpleShowLayout>
    </Show>
  );
};
