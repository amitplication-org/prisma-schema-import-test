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
import { TeamscoreListRelationFilter } from "../../teamscore/base/TeamscoreListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TeamWhereInput {
  @ApiProperty({
    required: false,
    type: () => TeamscoreListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TeamscoreListRelationFilter)
  @IsOptional()
  @Field(() => TeamscoreListRelationFilter, {
    nullable: true,
  })
  teamscore?: TeamscoreListRelationFilter;
}

export { TeamWhereInput as TeamWhereInput };
