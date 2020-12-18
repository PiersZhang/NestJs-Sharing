/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-04 16:24:53
 * @LastEditTime: 2020-12-15 14:55:56
 * @LastEditors: Do not edit
 */
import { Injectable } from '@nestjs/common';
import { data } from '../mock/index';

@Injectable()
export class BodyService {
    constructor(
    ) { }

    async getBody(id: number) {
        let body = await data.find((item) => {return item.id === Number(id)}).body;
        return body;
    }
}