import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Product } from './product.entity';

@Entity()
export class Usuario{
    
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

    @OneToMany(type => Product, products => products.user)
    products: Product[];

}