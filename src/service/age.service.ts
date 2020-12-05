/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-04 16:24:53
 * @LastEditTime: 2020-12-05 10:43:02
 * @LastEditors: Do not edit
 */
import { Injectable } from '@nestjs/common';
import { data } from '../mock/index';

@Injectable()
export class AgeService {
    constructor(
    ) { }

    async getAge(): Promise<number> {
        return await data.find(item => item.id === 1).age;
    }
}