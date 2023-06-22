import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const RandomplayerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Fname" source="fname" />
        <TextField label="Id" source="id" />
        <TextField label="Lname" source="lname" />
        <TextField label="Randomplayer Id" source="RandomplayerId" />
      </SimpleShowLayout>
    </Show>
  );
};
