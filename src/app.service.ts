/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-02 18:13:07
 * @LastEditTime: 2020-12-05 10:17:28
 * @LastEditors: Do not edit
 */
import { Injectable } from '@nestjs/common';
import { UserService } from './service/user.service';

@Injectable()
export class AppService {
  constructor(
    private readonly userService: UserService,
  ){ }
  getHello() {
      return this.userService.getUserInfo();
  }
}
