import { PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Sale } from "./sale.entity";
import { User } from "./user.entity";

export class Client{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    nome: string;

    @Column({length: 14})
    cpfCnpj: string
    
    @OneToMany(type => Sale, sale=>sale.client)
    sales: Sale[];

    @ManyToOne(type => User, user => user.)
    user: User;

}