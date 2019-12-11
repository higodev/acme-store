import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Product } from './product.entity';
import { Sale } from './sale.entity';
import { Client } from './client.entity';
import { Payment } from './payment.entity';

@Entity({name: "users"})
export class User{
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({length: 100})
    nome: string;

    @Column({length: 14, unique: true})
    cnpj: string;

    @Column({length: 100, unique: true})
    email: string;

    @Column({length: 16})
    senha: string;
    
    @OneToMany(type => Product, product => product.user)
    products: Product[];

    @OneToMany(type => Sale, sale => sale.user)
    sales: Sale[];

    @OneToMany(type => Client, client => client.user)
    clients: Client[];

    @OneToMany(type => Payment, payment => payment.user)
    payments: Payment[];

}