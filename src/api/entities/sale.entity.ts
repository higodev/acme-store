import { ManyToOne, Column, PrimaryGeneratedColumn, Entity, OneToMany, JoinColumn } from "typeorm";
import { User } from "./user.entity";
import { Client } from "./client.entity";
import { SaleItem } from "./sale-item.entity";
import { SalePayment } from "./sale-payment.entity";

@Entity({name: "sales"})
export class Sale{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "data_pedido"})
    dataPedido: number = new Date().getDate();

    @ManyToOne(type => Client, client => client.sales)
    @JoinColumn({name: "client_id"})
    client: Client;

    @ManyToOne(type => User, user => user.sales)
    @JoinColumn({name: "user_id"})
    user: User;

    @OneToMany(type => SaleItem, items => items.sale)
    items: SaleItem[];

    @OneToMany(type=> SalePayment, payment =>payment)
    payments: SalePayment[];

}