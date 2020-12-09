/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-04 16:22:14
 * @LastEditTime: 2020-12-09 20:03:38
 * @LastEditors: Do not edit
 */
import { Controller, Get, Query } from '@nestjs/common';
import { NameService } from '../service/name.service';
import { QueryDto } from '../dto/index.dto';


@Controller()
export class NameController {
    constructor(
        private readonly nameService: NameService
    ) { }

    @Get('/name')
    async name(@Query() query:QueryDto) {
        return await this.nameService.getName(query.id);
    }
}
