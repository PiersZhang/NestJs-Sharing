/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-04 16:20:42
 * @LastEditTime: 2020-12-15 15:22:37
 * @LastEditors: Do not edit
 */
import { Module, Global } from '@nestjs/common';
import { BrandController } from 'src/controller/brand.controller';
import { BrandService } from '../service/brand.service';

@Module({
    providers: [BrandService],
    // controllers: [BrandController], 
    exports: [BrandService],
})
export class BrandModule { }
