/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MatchscoreService } from "../matchscore.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MatchscoreCreateInput } from "./MatchscoreCreateInput";
import { MatchscoreWhereInput } from "./MatchscoreWhereInput";
import { MatchscoreWhereUniqueInput } from "./MatchscoreWhereUniqueInput";
import { MatchscoreFindManyArgs } from "./MatchscoreFindManyArgs";
import { MatchscoreUpdateInput } from "./MatchscoreUpdateInput";
import { Matchscore } from "./Matchscore";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MatchscoreControllerBase {
  constructor(
    protected readonly service: MatchscoreService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Matchscore })
  @nestAccessControl.UseRoles({
    resource: "Matchscore",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: MatchscoreCreateInput
  ): Promise<Matchscore> {
    return await this.service.create({
      data: {
        ...data,

        members: data.members
          ? {
              connect: data.members,
            }
          : undefined,

        schedule: data.schedule
          ? {
              connect: data.schedule,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        members: {
          select: {
            id: true,
          },
        },

        playerPoints: true,

        schedule: {
          select: {
            id: true,
          },
        },

        teamId: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Matchscore] })
  @ApiNestedQuery(MatchscoreFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Matchscore",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Matchscore[]> {
    const args = plainToClass(MatchscoreFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,

        members: {
          select: {
            id: true,
          },
        },

        playerPoints: true,

        schedule: {
          select: {
            id: true,
          },
        },

        teamId: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Matchscore })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Matchscore",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: MatchscoreWhereUniqueInput
  ): Promise<Matchscore | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,

        members: {
          select: {
            id: true,
          },
        },

        playerPoints: true,

        schedule: {
          select: {
            id: true,
          },
        },

        teamId: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Matchscore })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Matchscore",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: MatchscoreWhereUniqueInput,
    @common.Body() data: MatchscoreUpdateInput
  ): Promise<Matchscore | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          members: data.members
            ? {
                connect: data.members,
              }
            : undefined,

          schedule: data.schedule
            ? {
                connect: data.schedule,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          members: {
            select: {
              id: true,
            },
          },

          playerPoints: true,

          schedule: {
            select: {
              id: true,
            },
          },

          teamId: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Matchscore })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Matchscore",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: MatchscoreWhereUniqueInput
  ): Promise<Matchscore | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,

          members: {
            select: {
              id: true,
            },
          },

          playerPoints: true,

          schedule: {
            select: {
              id: true,
            },
          },

          teamId: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
