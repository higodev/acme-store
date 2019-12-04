import { User } from "./usuario.entity";
import { ManyToOne, Column, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entity";

export class Pedido{

    @PrimaryGeneratedColumn
    id: number;

    @Column()
    dataPedido: Date;

    @ManyToOne(type => Client, client => client.pedidos)
    client: Client;
    
    user: User;


}