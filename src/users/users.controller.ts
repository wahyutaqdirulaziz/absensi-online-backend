import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Put,
    Query,
    Request,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import { ApiSecurity, ApiTags} from "@nestjs/swagger";
import {UsersService} from "./users.service";

import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {AuthGuard} from "@nestjs/passport";
import { UpdatePasswordDto } from './dto/users.user.dto';

@ApiTags('user')
@Controller('user')
export class UsersController {
    constructor(
        private readonly usersService: UsersService) {}


    @UseGuards(JwtAuthGuard)
    @ApiSecurity('access-key')
    @UseInterceptors(ClassSerializerInterceptor)
    @Put('update/password')
    public async updatePassword(@Request() req, @Body() 
                   updatePasswordDto: UpdatePasswordDto) {
        await this.usersService
         .updatePassword(updatePasswordDto, req.user.id);
        return {
            message: "password_update_success"
        };
    }

}