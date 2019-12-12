import { Client } from "../../entities/client.entity";
import { 
    ApiProperty, 
    ApiPropertyOptional 
} from "@nestjs/swagger";
import { User } from "src/api/entities/user.entity";

export class ClientDto{

    @ApiProperty()
    id: number;

    @ApiProperty()
    nome: string;

    @ApiProperty()
    cpfCnpj: string;

    @ApiPropertyOptional()
    email: string;
        
    constructor(client: Client){
        this.id = client.id;
        this.nome = client.nome;
        this.cpfCnpj = client.cpfCnpj;
        this.email =client.email;
    }

    convertObj(user: User): Client{
        let obj = new Client();
        obj.id = this.id;
        obj.nome = this.nome;
        obj.cpfCnpj = this.cpfCnpj;
        obj.email = this.email;
        obj.user = user;
        return obj;
    }
}