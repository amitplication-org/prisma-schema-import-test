import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TEE_TITLE_FIELD } from "../tee/TeeTitle";

export const HoleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Holes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Created At" source="createdAt" />
        <TextField label="Handicap" source="handicap" />
        <TextField label="Hole Number" source="holeNumber" />
        <TextField label="Id" source="id" />
        <TextField label="Length" source="length" />
        <TextField label="Par" source="par" />
        <ReferenceField label="Tee" source="tee.id" reference="Tee">
          <TextField source={TEE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
