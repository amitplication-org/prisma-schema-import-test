import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TEAM_TITLE_FIELD } from "./TeamTitle";
import { MEMBER_TITLE_FIELD } from "../member/MemberTitle";
import { SEASON_TITLE_FIELD } from "../season/SeasonTitle";

export const TeamShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Teamscore"
          target="TeamId"
          label="Teamscores"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
