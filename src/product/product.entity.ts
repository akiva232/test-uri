import { PrimaryGeneratedColumn, BaseEntity, Column, Entity } from 'typeorm';

@Entity()
export class Product extends BaseEntity {

    @Column()
    description:string;

    @Column()
    name:string;

    @Column()
    price:string

}
