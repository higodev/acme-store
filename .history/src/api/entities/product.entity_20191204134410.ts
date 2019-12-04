import { PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Product{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:100})
    nome:string;

    @Column({default:0, name: "preco_venda"})
    precoVenda: number;

    @ManyToOne(type => User, user => user.products)
    @JoinColumn({name:"user_id"})
    user: User;

}