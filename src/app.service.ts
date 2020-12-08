/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-02 18:13:07
 * @LastEditTime: 2020-12-08 16:20:15
 * @LastEditors: Do not edit
 */
import { Injectable } from '@nestjs/common';
import { UserService } from './service/user.service';

@Injectable()
export class AppService {
  constructor(
    private readonly userService: UserService,
  ){ }
  getHello(id: number) {
      return this.userService.getUserInfo(id);
  }
}
