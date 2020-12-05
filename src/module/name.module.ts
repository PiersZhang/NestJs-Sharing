/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-04 16:42:57
 * @LastEditTime: 2020-12-05 13:23:17
 * @LastEditors: Do not edit
 */
import { Module } from '@nestjs/common';
import { NameController } from '../controller/name.controller';
import { NameService } from '../service/name.service';

@Module({
    providers: [NameService],
    controllers: [NameController],
    exports: [NameService],
})
export class NameModule { }
