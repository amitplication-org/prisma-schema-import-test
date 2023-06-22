import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const TeamCopyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Id" source="id" />
        <TextField label="Player Id" source="playerId" />
        <TextField label="Player Rank" source="playerRank" />
        <TextField label="Season Id" source="seasonId" />
        <TextField label="Sub" source="sub" />
        <TextField label="Team Id" source="teamId" />
        <TextField label="Updated At" source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
