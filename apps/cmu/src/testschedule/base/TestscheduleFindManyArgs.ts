/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TestscheduleWhereInput } from "./TestscheduleWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TestscheduleOrderByInput } from "./TestscheduleOrderByInput";

@ArgsType()
class TestscheduleFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TestscheduleWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TestscheduleWhereInput, { nullable: true })
  @Type(() => TestscheduleWhereInput)
  where?: TestscheduleWhereInput;

  @ApiProperty({
    required: false,
    type: [TestscheduleOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TestscheduleOrderByInput], { nullable: true })
  @Type(() => TestscheduleOrderByInput)
  orderBy?: Array<TestscheduleOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TestscheduleFindManyArgs as TestscheduleFindManyArgs };
