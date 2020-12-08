/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-04 16:24:53
 * @LastEditTime: 2020-12-08 16:51:57
 * @LastEditors: Do not edit
 */
import { Injectable } from '@nestjs/common';
import { data } from '../mock/index';

@Injectable()
export class NameService {
    constructor(
    ) { }

    async getName(id: number): Promise<string> {
        return await data.find(item => item.id === Number(id)).name;
    }
}