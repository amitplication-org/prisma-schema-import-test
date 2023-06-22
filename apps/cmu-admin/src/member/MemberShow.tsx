import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { MEMBER_TITLE_FIELD } from "./MemberTitle";
import { SCHEDULE_TITLE_FIELD } from "../schedule/ScheduleTitle";
import { SEASON_TITLE_FIELD } from "../season/SeasonTitle";

export const MemberShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Active" source="active" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Email" source="email" />
        <TextField label="Fname" source="fname" />
        <TextField label="Ghin" source="ghin" />
        <TextField label="Id" source="id" />
        <TextField label="Lname" source="lname" />
        <TextField label="Tee" source="tee" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="Matchscore"
          target="MemberId"
          label="Matchscores"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Members"
              source="member.id"
              reference="Member"
            >
              <TextField source={MEMBER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Player Points" source="playerPoints" />
            <ReferenceField
              label="Schedule"
              source="schedule.id"
              reference="Schedule"
            >
              <TextField source={SCHEDULE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Team Id" source="teamId" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Score" target="MemberId" label="Scores">
          <Datagrid rowClick="show">
            <TextField label="Back" source="back" />
            <TextField label="Bhndcp" source="bhndcp" />
            <TextField label="Bnet" source="bnet" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Fhndcp" source="fhndcp" />
            <TextField label="Firstname" source="firstname" />
            <TextField label="Fnet" source="fnet" />
            <TextField label="Front" source="front" />
            <TextField label="H1" source="h1" />
            <TextField label="H10" source="h10" />
            <TextField label="H11" source="h11" />
            <TextField label="H12" source="h12" />
            <TextField label="H13" source="h13" />
            <TextField label="H14" source="h14" />
            <TextField label="H15" source="h15" />
            <TextField label="H16" source="h16" />
            <TextField label="H17" source="h17" />
            <TextField label="H18" source="h18" />
            <TextField label="H2" source="h2" />
            <TextField label="H3" source="h3" />
            <TextField label="H4" source="h4" />
            <TextField label="H5" source="h5" />
            <TextField label="H6" source="h6" />
            <TextField label="H7" source="h7" />
            <TextField label="H8" source="h8" />
            <TextField label="H9" source="h9" />
            <TextField label="Id" source="id" />
            <TextField label="Lastname" source="lastname" />
            <ReferenceField
              label="Members"
              source="member.id"
              reference="Member"
            >
              <TextField source={MEMBER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Nine Played" source="ninePlayed" />
            <BooleanField label="Press" source="press" />
            <ReferenceField
              label="Schedule"
              source="schedule.id"
              reference="Schedule"
            >
              <TextField source={SCHEDULE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Score Date" source="scoreDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Team" target="MemberId" label="Teams">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Members"
              source="member.id"
              reference="Member"
            >
              <TextField source={MEMBER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Player Rank" source="playerRank" />
            <ReferenceField
              label="Season"
              source="season.id"
              reference="Season"
            >
              <TextField source={SEASON_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Sub" source="sub" />
            <TextField label="Team Id" source="teamId" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
