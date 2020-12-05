/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-02 18:13:07
 * @LastEditTime: 2020-12-05 10:16:47
 * @LastEditors: Do not edit
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { NameService } from './service/name.service';

@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService
  ) {}

  @Get('/getHello')
  getHello() {
    return this.appService.getHello();
  }
}
