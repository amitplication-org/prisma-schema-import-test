/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Course } from "../../course/base/Course";
import {
  ValidateNested,
  IsDate,
  IsOptional,
  IsInt,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumCourseTeetypeTeeType } from "./EnumCourseTeetypeTeeType";

@ObjectType()
class CourseTeetype {
  @ApiProperty({
    required: true,
    type: () => Course,
  })
  @ValidateNested()
  @Type(() => Course)
  course?: Course;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  id!: number | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  teeId!: number;

  @ApiProperty({
    required: true,
    enum: EnumCourseTeetypeTeeType,
  })
  @IsEnum(EnumCourseTeetypeTeeType)
  @Field(() => EnumCourseTeetypeTeeType, {
    nullable: true,
  })
  teeType?: "MEN" | "SENIOR" | "LADIES";

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;
}

export { CourseTeetype as CourseTeetype };
