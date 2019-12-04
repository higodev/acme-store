import { PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Sale } from "./sale.entity";

export class Client{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    nome: string;

    @Column({length: 14})
    cpfCnpj: string
    
    @OneToMany(type => Sale, pedidos=>pedidos.client)
    pedidos: Sale[];

}