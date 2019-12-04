import { PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, Entity, JoinColumn } from "typeorm";
import { Sale } from "./sale.entity";
import { User } from "./user.entity";

@Entity({name: "clients"})
export class Client{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    nome: string;

    @Column({name: "cpf_cnpj", length: 14})
    cpfCnpj: string
    
    @OneToMany(type => Sale, sale=>sale.client)
    sales: Sale[];

    @ManyToOne(type => User, user => user.clients)
    @JoinColumn({name: "user_id"})
    user: User;

}