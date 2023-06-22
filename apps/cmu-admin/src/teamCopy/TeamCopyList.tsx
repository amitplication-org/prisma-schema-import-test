import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TeamCopyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TeamCopies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Id" source="id" />
        <TextField label="Player Id" source="playerId" />
        <TextField label="Player Rank" source="playerRank" />
        <TextField label="Season Id" source="seasonId" />
        <TextField label="Sub" source="sub" />
        <TextField label="Team Id" source="teamId" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
