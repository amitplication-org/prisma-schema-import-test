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
import { ProductWhereInput } from "./ProductWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ProductCountArgs {
  @ApiProperty({
    required: false,
    type: () => ProductWhereInput,
  })
  @Field(() => ProductWhereInput, { nullable: true })
  @Type(() => ProductWhereInput)
  where?: ProductWhereInput;
}

export { ProductCountArgs as ProductCountArgs };
