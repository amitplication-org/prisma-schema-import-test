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
import { MEMBER_TITLE_FIELD } from "../member/MemberTitle";
import { SEASON_TITLE_FIELD } from "../season/SeasonTitle";

export const TeamList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Teams"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Id" source="id" />
        <ReferenceField label="Members" source="member.id" reference="Member">
          <TextField source={MEMBER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Player Rank" source="playerRank" />
        <ReferenceField label="Season" source="season.id" reference="Season">
          <TextField source={SEASON_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Sub" source="sub" />
        <TextField label="Team Id" source="teamId" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
