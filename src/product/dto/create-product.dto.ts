import { IsAlphanumeric, IsNumber, IsString } from 'class-validator';
import { BaseEntity } from 'typeorm';

export class CreateProductDTO extends BaseEntity {

    @IsAlphanumeric()
    description:string= " "

    @IsAlphanumeric()
    name:string=" "

    @IsNumber()
    price:string= " "
    


}
