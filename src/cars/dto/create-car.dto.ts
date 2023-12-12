import { IsIn, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateCarDto {

    @IsOptional()
    id?:string;

    @IsString()
    name: string

    @IsString()
    @IsIn(['Toyota','Chevrolet','Ford'])
    brand: string
    
    @IsNumber()
    serial: number
}
