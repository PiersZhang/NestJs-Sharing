/*
 * @Author: Piers.Zhang
 * @Date: 2020-12-08 16:16:59
 * @LastEditTime: 2020-12-09 13:52:33
 * @LastEditors: Do not edit
 */
import { IsString, isInt, IsNumberString,IsNumber, IsInt } from 'class-validator';
import {Type,Transform} from 'class-transformer';

export class QueryDto {
    @Transform(parseInt)
    @IsInt()
    id: number;
}