/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-04 16:20:42
 * @LastEditTime: 2020-12-15 15:50:49
 * @LastEditors: Do not edit
 */
import { Module, Global, HttpModule } from '@nestjs/common';
import { BodyController } from '../controller/body.controller';
import { BodyService } from '../service/body.service';

@Global()
@Module({
    providers: [BodyService],
    controllers: [BodyController],
    exports: [BodyService],
})
export class BodyModule { }
