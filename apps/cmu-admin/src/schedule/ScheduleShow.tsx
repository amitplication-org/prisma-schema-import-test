import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { MEMBER_TITLE_FIELD } from "../member/MemberTitle";
import { SCHEDULE_TITLE_FIELD } from "./ScheduleTitle";

export const ScheduleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date Of Play" source="dateOfPlay" />
        <TextField label="Id" source="id" />
        <TextField label="Id Player1" source="idPlayer1" />
        <TextField label="Id Player2" source="idPlayer2" />
        <TextField label="Id Team1" source="idTeam1" />
        <TextField label="Id Team2" source="idTeam2" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="Matchscore"
          target="ScheduleId"
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
        <ReferenceManyField
          reference="Score"
          target="ScheduleId"
          label="Scores"
        >
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
      </SimpleShowLayout>
    </Show>
  );
};
