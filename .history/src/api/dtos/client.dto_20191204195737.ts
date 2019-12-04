import { ApiExtraModels } from "@nestjs/swagger";

@ApiExtraModels()
export class ClientDto{

    id: number;
    nome: string;
    cpfCnpj: string
    
}