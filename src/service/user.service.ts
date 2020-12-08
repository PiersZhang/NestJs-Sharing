/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-04 16:24:53
 * @LastEditTime: 2020-12-08 16:20:41
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

    async getUserInfo(id: number) {
        const name = await this.nameService.getName(id);
        const age = await this.ageService.getAge(id);
        return this.welcome(age, name);
    }
    async welcome(age: number, name: string): Promise<string> {
        return await `欢迎${age}岁的${name}`;
    }
}