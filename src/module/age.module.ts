/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-04 16:42:57
 * @LastEditTime: 2020-12-05 10:26:15
 * @LastEditors: Do not edit
 */
import { Module, Global, HttpModule } from '@nestjs/common';
import { AgeController } from '../controller/age.controller';
import { AgeService } from '../service/age.service';

@Module({
    providers: [AgeService],
    controllers: [AgeController],
    exports: [AgeService],
})
export class AgeModule { }
