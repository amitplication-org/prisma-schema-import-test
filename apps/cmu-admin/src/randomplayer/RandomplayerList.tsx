import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RandomplayerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Randomplayers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Fname" source="fname" />
        <TextField label="Id" source="id" />
        <TextField label="Lname" source="lname" />
        <TextField label="Randomplayer Id" source="RandomplayerId" />
      </Datagrid>
    </List>
  );
};
