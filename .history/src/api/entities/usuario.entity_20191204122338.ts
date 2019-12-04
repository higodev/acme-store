import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class User{
    
    @PrimaryGeneratedColumn()
    id: Number;
    
    @Column({length: 100})
    nome: string;
    cnpj: string;
    email: string;
    senha: string;

}