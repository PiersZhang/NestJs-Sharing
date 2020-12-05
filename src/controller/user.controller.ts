/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-04 16:22:14
 * @LastEditTime: 2020-12-04 16:31:03
 * @LastEditors: Do not edit
 */
import { Controller, Get } from '@nestjs/common';
import { UserService } from '../service/user.service';


@Controller()
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @Get('/userInfo')
    async userInfo() {
        return await this.userService.getUserInfo();
    }
}
