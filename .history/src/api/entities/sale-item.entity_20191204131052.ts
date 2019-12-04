import { PrimaryGeneratedColumn, Column } from "typeorm";

export class SaleItem{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    nome:string;

}