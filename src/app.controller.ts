/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-02 18:13:07
 * @LastEditTime: 2020-12-08 16:19:49
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

  @Get('/getHello')
  getHello(@Query() query: QueryDto) {
    return this.appService.getHello(query.id);
  }
}
