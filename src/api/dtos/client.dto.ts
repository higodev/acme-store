import { Client } from "../entities/client.entity";

export class ClientDto{
    
    id: number;
    nome: string;
    email: string;
    cpfCnpj: string;
    
    constructor(client: Client){
        this.id = client.id;
        this.nome = client.nome;
        this.email =client.email;
        this.cpfCnpj = client.cpfCnpj;
    }

}