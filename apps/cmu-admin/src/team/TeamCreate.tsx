import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { MemberTitle } from "../member/MemberTitle";
import { SeasonTitle } from "../season/SeasonTitle";
import { TeamscoreTitle } from "../teamscore/TeamscoreTitle";

export const TeamCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="members.id" reference="Member" label="Members">
          <SelectInput optionText={MemberTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Player Rank" source="playerRank" />
        <ReferenceInput source="season.id" reference="Season" label="Season">
          <SelectInput optionText={SeasonTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Sub" source="sub" />
        <NumberInput step={1} label="Team Id" source="teamId" />
        <ReferenceArrayInput
          source="teamscore"
          reference="Teamscore"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TeamscoreTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
