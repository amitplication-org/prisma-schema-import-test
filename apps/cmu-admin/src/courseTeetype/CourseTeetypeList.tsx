import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COURSE_TITLE_FIELD } from "../course/CourseTitle";

export const CourseTeetypeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CourseTeetypes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Course" source="course.id" reference="Course">
          <TextField source={COURSE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Created At" source="createdAt" />
        <TextField label="Id" source="id" />
        <TextField label="Tee Id" source="teeId" />
        <TextField label="Tee Type" source="teeType" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
