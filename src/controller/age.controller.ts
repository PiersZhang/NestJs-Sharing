/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-04 16:22:14
 * @LastEditTime: 2020-12-08 16:24:17
 * @LastEditors: Do not edit
 */
import { Controller, Get, Query } from '@nestjs/common';
import { AgeService } from '../service/age.service';
import { QueryDto } from '../dto/index.dto';


@Controller()
export class AgeController {
    constructor(
        private readonly ageService: AgeService
    ) { }

    @Get('/age')
    async age(@Query() query: QueryDto) {
        return await this.ageService.getAge(query.id);
    }
}
