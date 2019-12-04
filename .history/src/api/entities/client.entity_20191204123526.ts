import { PrimaryGeneratedColumn, Column } from "typeorm";

export class Client{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    nome: string;

    @Column({length: 14})
    cpfCnpj: string
    
}