/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-04 16:22:14
 * @LastEditTime: 2020-12-05 10:25:09
 * @LastEditors: Do not edit
 */
import { Controller, Get } from '@nestjs/common';
import { NameService } from '../service/name.service';


@Controller()
export class NameController {
    constructor(
        private readonly nameService: NameService
    ) { }

    @Get('/name')
    async name() {
        return await this.nameService.getName();
    }
}
