import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { User } from "src/api/entities/user.entity";

export class UserDto{

    @ApiProperty()
    @IsNotEmpty()
    id: number;

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
        this.id = user.id;
        this.nome = user.nome;
        this.cnpj = user.cnpj;
        this.email = user.email;
        this.senha = user.senha;
    }

    convertObj(): User{
        let obj = new User()
        obj.id = this.id;
        obj.nome = this.nome;
        obj.cnpj = this.cnpj;
        obj.email = this.email;
        obj.senha = this.senha;
        return obj;
    }
    
}