import { 
    PrimaryGeneratedColumn, 
    Entity, 
    Column, 
    OneToMany 
} from 'typeorm'
import { Product } from './product.entity';
import { Sale } from './sale.entity';
import { Client } from './client.entity';
import { Payment } from './payment.entity';
import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';

@Entity({name: "users"})
export class User{
    
    @ApiPropertyOptional()
    @PrimaryGeneratedColumn()
    id: number;
    
    @ApiProperty()
    @Column({length: 100, nullable: false})
    nome: string;

    @ApiProperty()
    @Column({length: 14, unique: true})
    cnpj: string;

    @ApiProperty()
    @Column({length: 100, unique: true})
    email: string;

    @ApiProperty()
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