/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-04 16:22:14
 * @LastEditTime: 2020-12-08 16:25:25
 * @LastEditors: Do not edit
 */
import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { QueryDto } from '../dto/index.dto';

@Controller()
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @Get('/userInfo')
    async userInfo(@Query() query: QueryDto) {
        return await this.userService.getUserInfo(query.id);
    }
}
