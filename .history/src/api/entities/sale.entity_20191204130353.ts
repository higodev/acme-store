import { User } from "./user.entity";
import { ManyToOne, Column, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entity";

export class Sale{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dataPedido: Date;

    @ManyToOne(type => Client, client => client.pedidos)
    client: Client;

    @ManyToOne(type => User, user => user.sales)
    user: User;


}