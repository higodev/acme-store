import { User } from "./user.entity";
import { ManyToOne, Column, PrimaryGeneratedColumn, Entity } from "typeorm";
import { Client } from "./client.entity";

@Entity()
export class Sale{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dataPedido: Date;

    @ManyToOne(type => Client, client => client.sales)
    client: Client;

    @ManyToOne(type => User, user => user.sales)
    user: User;


}