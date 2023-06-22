import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { MatchscoreTitle } from "../matchscore/MatchscoreTitle";
import { ScoreTitle } from "../score/ScoreTitle";

export const ScheduleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Date Of Play" source="dateOfPlay" />
        <NumberInput step={1} label="Id Player1" source="idPlayer1" />
        <NumberInput step={1} label="Id Player2" source="idPlayer2" />
        <NumberInput step={1} label="Id Team1" source="idTeam1" />
        <NumberInput step={1} label="Id Team2" source="idTeam2" />
        <ReferenceArrayInput
          source="matchscore"
          reference="Matchscore"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MatchscoreTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="scores"
          reference="Score"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScoreTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
