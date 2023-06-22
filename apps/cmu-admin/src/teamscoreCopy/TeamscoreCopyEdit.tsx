import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const TeamscoreCopyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Date Of Play" source="dateOfPlay" />
        <NumberInput label="Points" source="points" />
        <NumberInput step={1} label="Team Iid" source="teamIid" />
        <NumberInput step={1} label="Teamkey" source="teamkey" />
      </SimpleForm>
    </Edit>
  );
};
