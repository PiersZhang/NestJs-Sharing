/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-02 18:13:07
 * @LastEditTime: 2020-12-15 15:35:58
 * @LastEditors: Do not edit
 */
import { Injectable } from '@nestjs/common';
import { BodyService } from './service/body.service';
import { BrandService } from './service/brand.service'; 
@Injectable()
export class AppService {
    constructor(
      private readonly bodyService: BodyService,
      private readonly brandService: BrandService,
    ){ }
    async getCar(id: number) {
        let body = await this.bodyService.getBody(id);
        let brand = await this.brandService.getBrand(id);
        return `组装了一台${body}的${brand}`
    }
}
