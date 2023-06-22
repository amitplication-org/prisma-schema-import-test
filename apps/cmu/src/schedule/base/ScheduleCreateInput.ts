/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, IsInt, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MatchscoreCreateNestedManyWithoutSchedulesInput } from "./MatchscoreCreateNestedManyWithoutSchedulesInput";
import { ScoreCreateNestedManyWithoutSchedulesInput } from "./ScoreCreateNestedManyWithoutSchedulesInput";

@InputType()
class ScheduleCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateOfPlay?: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  idPlayer1?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  idPlayer2?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  idTeam1?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  idTeam2?: number | null;

  @ApiProperty({
    required: false,
    type: () => MatchscoreCreateNestedManyWithoutSchedulesInput,
  })
  @ValidateNested()
  @Type(() => MatchscoreCreateNestedManyWithoutSchedulesInput)
  @IsOptional()
  @Field(() => MatchscoreCreateNestedManyWithoutSchedulesInput, {
    nullable: true,
  })
  matchscore?: MatchscoreCreateNestedManyWithoutSchedulesInput;

  @ApiProperty({
    required: false,
    type: () => ScoreCreateNestedManyWithoutSchedulesInput,
  })
  @ValidateNested()
  @Type(() => ScoreCreateNestedManyWithoutSchedulesInput)
  @IsOptional()
  @Field(() => ScoreCreateNestedManyWithoutSchedulesInput, {
    nullable: true,
  })
  scores?: ScoreCreateNestedManyWithoutSchedulesInput;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { ScheduleCreateInput as ScheduleCreateInput };
