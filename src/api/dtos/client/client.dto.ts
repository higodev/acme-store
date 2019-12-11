import { Client } from "../../entities/client.entity";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

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

}