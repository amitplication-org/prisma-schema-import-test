import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const TeamscoreCopyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Date Of Play" source="dateOfPlay" />
        <NumberInput label="Points" source="points" />
        <NumberInput step={1} label="Team Iid" source="teamIid" />
        <NumberInput step={1} label="Teamkey" source="teamkey" />
      </SimpleForm>
    </Create>
  );
};
