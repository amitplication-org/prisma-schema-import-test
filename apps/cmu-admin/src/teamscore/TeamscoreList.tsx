import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";

export const TeamscoreList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Teamscores"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date Of Play" source="dateOfPlay" />
        <TextField label="Id" source="id" />
        <TextField label="Points" source="points" />
        <ReferenceField label="Team" source="team.id" reference="Team">
          <TextField source={TEAM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Team Iid" source="teamIid" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
