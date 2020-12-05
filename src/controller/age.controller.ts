/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-04 16:22:14
 * @LastEditTime: 2020-12-05 10:25:17
 * @LastEditors: Do not edit
 */
import { Controller, Get } from '@nestjs/common';
import { AgeService } from '../service/age.service';


@Controller()
export class AgeController {
    constructor(
        private readonly ageService: AgeService
    ) { }

    @Get('/age')
    async age() {
        return await this.ageService.getAge();
    }
}
