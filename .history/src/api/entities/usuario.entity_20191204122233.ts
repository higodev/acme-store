import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User(){
    
    @PrimaryGeneratedColumn()
    id: number;
    
    nome: string;
    cnpj: string;
    email: string;
    senha: string;

}