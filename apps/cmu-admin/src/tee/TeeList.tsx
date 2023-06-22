import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COURSE_TITLE_FIELD } from "../course/CourseTitle";

export const TeeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tees"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Brating" source="brating" />
        <TextField label="Bslope" source="bslope" />
        <ReferenceField label="Course" source="course.id" reference="Course">
          <TextField source={COURSE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Created At" source="createdAt" />
        <TextField label="Frating" source="frating" />
        <TextField label="Fslope" source="fslope" />
        <TextField label="Gender" source="gender" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Par" source="par" />
        <TextField label="Rating" source="rating" />
        <TextField label="Slope" source="slope" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
