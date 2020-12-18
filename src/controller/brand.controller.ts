/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-04 16:22:14
 * @LastEditTime: 2020-12-15 15:18:00
 * @LastEditors: Do not edit
 */
import { Controller, Get, Query } from '@nestjs/common';
import { BrandService } from '../service/brand.service';
import { QueryDto } from '../dto/index.dto';

@Controller()
export class BrandController {
    constructor(
        private readonly brandService: BrandService
    ) { }

    @Get('/getBrand')
    async brandInfo(@Query() query: QueryDto) {
        return await this.brandService.getBrand(query.id);
    }
}
