import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Product } from './product.entity';
import { Sale } from './sale.entity';
import { Client } from './client.entity';

@Entity()
export class User{
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({length: 100})
    nome: string;

    @Column({length: 14})
    cnpj: string;

    @Column({length: 100})
    email: string;

    @Column({length: 16})
    senha: string;

    @OneToMany(type => Product, product => product.user)
    products: Product[];

    @OneToMany(type => Sale, sale => sale.user)
    sales: Sale[];

    @OneToMany(type => Client, client => client.user)
    clients: Client[];
}