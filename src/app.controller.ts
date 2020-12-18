/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-02 18:13:07
 * @LastEditTime: 2020-12-15 14:31:07
 * @LastEditors: Do not edit
 */
import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { QueryDto } from './dto/index.dto';

@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService
  ) {}

  @Get('/getCar')
  getHello(@Query() query: QueryDto) {
    return this.appService.getCar(query.id);
  }
}
