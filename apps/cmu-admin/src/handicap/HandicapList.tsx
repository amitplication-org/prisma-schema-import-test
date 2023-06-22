import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const HandicapList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Handicaps"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Handicap" source="handicap" />
        <TextField label="Id" source="id" />
        <TextField label="Index" source="index" />
        <TextField label="Player Id" source="playerId" />
        <DateField source="updated" label="Updated" />
      </Datagrid>
    </List>
  );
};
