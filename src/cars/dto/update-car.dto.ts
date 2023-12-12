import { PartialType } from '@nestjs/mapped-types';
import { CreateCarDto } from './create-car.dto';
import { IsIn, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDto extends PartialType(CreateCarDto) {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string

    @IsString()
    readonly name: string
    
    @IsString()
    @IsIn(['Toyota','Chevrolet','Ford'])
    readonly brand: string
    
    @IsNumber()
    readonly serial: number
}
