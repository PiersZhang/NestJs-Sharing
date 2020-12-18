/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-04 16:24:53
 * @LastEditTime: 2020-12-15 14:59:30
 * @LastEditors: Do not edit
 */
import { Injectable } from '@nestjs/common';
import { data } from '../mock/index';

@Injectable()
export class BrandService {
    constructor(
    ) { }

    async getBrand(id: number) {
        let brand = await data.find((item) => {return item.id === Number(id)}).brand;
        return brand;
    }
}