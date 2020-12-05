/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-02 18:13:07
 * @LastEditTime: 2020-12-05 10:22:42
 * @LastEditors: Do not edit
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './module/user.module';

@Module({
    imports: [UserModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
