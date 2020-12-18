/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-04 16:22:14
 * @LastEditTime: 2020-12-15 14:44:56
 * @LastEditors: Do not edit
 */
import { Controller, Get, Query } from '@nestjs/common';
import { BodyService } from '../service/body.service';
import { QueryDto } from '../dto/index.dto';

@Controller()
export class BodyController {
    constructor(
        private readonly bodyService: BodyService
    ) { }

    @Get('/getBody')
    async bodyInfo(@Query() query: QueryDto) {
        return await this.bodyService.getBody(query.id);
    }
}
