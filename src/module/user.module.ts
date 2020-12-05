/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-04 16:20:42
 * @LastEditTime: 2020-12-05 10:26:49
 * @LastEditors: Do not edit
 */
import { Module, Global, HttpModule } from '@nestjs/common';
import { UserController } from '../controller/user.controller';
import { UserService } from '../service/user.service';
import { NameModule } from './name.module';
import { AgeModule } from './age.module'

@Module({
    imports: [NameModule, AgeModule],
    providers: [UserService],
    controllers: [UserController],
    exports: [UserService],
})
export class UserModule { }
