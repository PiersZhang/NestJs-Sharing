/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-02 18:13:07
 * @LastEditTime: 2020-12-15 15:47:10
 * @LastEditors: Do not edit
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BodyModule } from './module/body.module';
import { BrandModule } from './module/brand.module';
import { BuyerModule } from './module/buyer.module';

@Module({
    imports: [BodyModule, BrandModule, BuyerModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
