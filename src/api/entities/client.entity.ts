import { 
    PrimaryGeneratedColumn, 
    Column, 
    OneToMany, 
    ManyToOne, 
    Entity, 
    JoinColumn 
} from "typeorm";
import { Sale } from "./sale.entity";
import { User } from "./user.entity";
import { ApiPropertyOptional, ApiProperty } from "@nestjs/swagger";

@Entity({name: "clients"})
export class Client{

    @ApiPropertyOptional()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({length: 100, nullable: false})
    nome: string;

    @ApiProperty()
    @Column({name: "cpf_cnpj", length: 14, unique: true})
    cpfCnpj: string;
    
    @ApiPropertyOptional()
    @Column({name: "email", length: 100})
    email: string;
    
    @OneToMany(type => Sale, sale=>sale.client)
    sales: Sale[];

    @ManyToOne(type => User, user => user.clients)
    @JoinColumn({name: "user_id"})
    user: User;
}