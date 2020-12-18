/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-04 16:22:14
 * @LastEditTime: 2020-12-15 15:35:41
 * @LastEditors: Do not edit
 */
import { Controller, Get, Query } from '@nestjs/common';
import { BodyService } from '../service/body.service';
import { QueryDto } from '../dto/index.dto';

@Controller()
export class BuyerController {
    constructor(
        private readonly bodyService: BodyService
    ) { }

    @Get('/getBuy')
    async getBuy(@Query() query: QueryDto) {
        let body = await this.bodyService.getBody(query.id);
        return `我要买这辆${body}的车`;
    }
}
