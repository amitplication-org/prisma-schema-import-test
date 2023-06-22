import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const TeamscoreCopyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date Of Play" source="dateOfPlay" />
        <TextField label="Id" source="id" />
        <TextField label="Points" source="points" />
        <TextField label="Team Iid" source="teamIid" />
        <TextField label="Teamkey" source="teamkey" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
