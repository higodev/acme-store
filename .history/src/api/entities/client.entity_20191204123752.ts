import { PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Pedido } from "./pedido.entity";

export class Client{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    nome: string;

    @Column({length: 14})
    cpfCnpj: string
    
    @OneToMany(type => Pedido, pedidos=>pedidos.client)
    pedidos: Pedido[];

}