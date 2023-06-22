/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateSomeThingArgs } from "./CreateSomeThingArgs";
import { UpdateSomeThingArgs } from "./UpdateSomeThingArgs";
import { DeleteSomeThingArgs } from "./DeleteSomeThingArgs";
import { SomeThingCountArgs } from "./SomeThingCountArgs";
import { SomeThingFindManyArgs } from "./SomeThingFindManyArgs";
import { SomeThingFindUniqueArgs } from "./SomeThingFindUniqueArgs";
import { SomeThing } from "./SomeThing";
import { Customer } from "../../customer/base/Customer";
import { SomeThingService } from "../someThing.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SomeThing)
export class SomeThingResolverBase {
  constructor(
    protected readonly service: SomeThingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SomeThing",
    action: "read",
    possession: "any",
  })
  async _someThingsMeta(
    @graphql.Args() args: SomeThingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SomeThing])
  @nestAccessControl.UseRoles({
    resource: "SomeThing",
    action: "read",
    possession: "any",
  })
  async someThings(
    @graphql.Args() args: SomeThingFindManyArgs
  ): Promise<SomeThing[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SomeThing, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SomeThing",
    action: "read",
    possession: "own",
  })
  async someThing(
    @graphql.Args() args: SomeThingFindUniqueArgs
  ): Promise<SomeThing | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SomeThing)
  @nestAccessControl.UseRoles({
    resource: "SomeThing",
    action: "create",
    possession: "any",
  })
  async createSomeThing(
    @graphql.Args() args: CreateSomeThingArgs
  ): Promise<SomeThing> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        customer: args.data.customer
          ? {
              connect: args.data.customer,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SomeThing)
  @nestAccessControl.UseRoles({
    resource: "SomeThing",
    action: "update",
    possession: "any",
  })
  async updateSomeThing(
    @graphql.Args() args: UpdateSomeThingArgs
  ): Promise<SomeThing | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          customer: args.data.customer
            ? {
                connect: args.data.customer,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => SomeThing)
  @nestAccessControl.UseRoles({
    resource: "SomeThing",
    action: "delete",
    possession: "any",
  })
  async deleteSomeThing(
    @graphql.Args() args: DeleteSomeThingArgs
  ): Promise<SomeThing | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Customer, {
    nullable: true,
    name: "customer",
  })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "any",
  })
  async resolveFieldCustomer(
    @graphql.Parent() parent: SomeThing
  ): Promise<Customer | null> {
    const result = await this.service.getCustomer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
