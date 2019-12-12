import { 
    ApiProperty, 
    ApiPropertyOptional 
} from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { User } from "src/api/entities/user.entity";

export class UserDto{

    @ApiPropertyOptional()
    id: number

    @ApiProperty()
    @IsNotEmpty()
    nome: string;

    @ApiProperty()
    @IsNotEmpty()
    email: string;
    
    @ApiProperty()
    @IsNotEmpty()
    cnpj: string;

    @ApiProperty()
    @IsNotEmpty()
    senha: string;
    
    constructor(user: User){
        this.id =  user.id;
        this.nome = user.nome;
        this.email = user.email;
        this.cnpj = user.cnpj;
        this.senha = user.senha;
    }

}