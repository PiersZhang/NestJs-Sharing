/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-04 16:24:53
 * @LastEditTime: 2020-12-05 10:48:05
 * @LastEditors: Do not edit
 */
import { Injectable } from '@nestjs/common';
import { NameService } from './name.service';
import { AgeService } from './age.service';

@Injectable()
export class UserService {
    constructor(
        private readonly nameService: NameService,
        private readonly ageService: AgeService
    ) { }

    async getUserInfo() {
        const name = await this.nameService.getName();
        const age = await this.ageService.getAge();
        return this.welcome(age, name);
    }
    async welcome(age: number, name: string): Promise<string> {
        return await `欢迎${age}岁的${name}`;
    }
}