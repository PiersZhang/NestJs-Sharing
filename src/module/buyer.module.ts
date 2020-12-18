/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-04 16:20:42
 * @LastEditTime: 2020-12-15 15:50:39
 * @LastEditors: Do not edit
 */
import { Module, Global } from '@nestjs/common';
import { BuyerController } from 'src/controller/buyer.controller';
import { BodyService } from '../service/body.service';

@Module({
    // providers: [BodyService],
    controllers: [BuyerController],
})
export class BuyerModule { }
