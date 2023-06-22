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
} from "react-admin";

import { COURSE_TITLE_FIELD } from "../course/CourseTitle";
import { SEASON_TITLE_FIELD } from "./SeasonTitle";
import { MEMBER_TITLE_FIELD } from "../member/MemberTitle";

export const SeasonShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="End Date" source="endDate" />
        <TextField label="Id" source="id" />
        <TextField label="Midseason Date" source="midseasonDate" />
        <TextField label="Name" source="name" />
        <TextField label="Num Teams" source="numTeams" />
        <TextField label="Players Per Team" source="playersPerTeam" />
        <TextField label="Schedule Created" source="scheduleCreated" />
        <TextField label="Start Date" source="startDate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SeasonCourse"
          target="SeasonId"
          label="SeasonCourses"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Course"
              source="course.id"
              reference="Course"
            >
              <TextField source={COURSE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Created At" source="createdAt" />
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Season"
              source="season.id"
              reference="Season"
            >
              <TextField source={SEASON_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Team" target="SeasonId" label="Teams">
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
