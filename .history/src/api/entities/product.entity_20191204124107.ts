import { PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Usuario } from "./usuario.entity";

export class Product{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:100})
    nome:string;

    @Column({default:0, name: "preco_venda"})
    precoVenda: number;

    @ManyToOne(type => Usuario, user => user.products)
    @JoinColumn({name:"user_id"})
    user: Usuario;

}