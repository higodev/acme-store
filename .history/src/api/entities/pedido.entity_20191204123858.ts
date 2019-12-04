import { User } from "./usuario.entity";
import { ManyToOne } from "typeorm";
import { Client } from "./client.entity";

export class Pedido{

    id: number;

    dataPedido: Date;

    @ManyToOne(type => Client, client => client.pedidos)
    client: Client;

    user: User;


}