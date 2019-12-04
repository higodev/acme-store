import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

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

}