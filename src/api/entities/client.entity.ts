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
import { ClientDto } from "../dtos/client/client.dto";

@Entity({name: "clients"})
export class Client{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100, nullable: false})
    nome: string;

    @Column({name: "cpf_cnpj", length: 14, unique: true})
    cpfCnpj: string;
    
    @Column({name: "email", length: 100})
    email: string;
    
    @OneToMany(type => Sale, sale=>sale.client)
    sales: Sale[];

    @ManyToOne(type => User, user => user.clients)
    @JoinColumn({name: "user_id"})
    user: User;
    
    convertListDto(clients: Client[]): ClientDto[]{
        return clients.map(client => new ClientDto(client));
    }

}