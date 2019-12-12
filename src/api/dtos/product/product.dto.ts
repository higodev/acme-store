import { 
    ApiProperty, 
    ApiPropertyOptional 
} from "@nestjs/swagger";
import { Product } from "src/api/entities/product.entity";
import { User } from "src/api/entities/user.entity";

export class ProductDto {

    @ApiProperty()
    id: number;
    
    @ApiProperty()
    nome: string;
    
    @ApiProperty()
    descricao: string;
    
    @ApiPropertyOptional()
    precoCompra: number;
    
    @ApiPropertyOptional()
    precoVenda: number;

    constructor(product: Product){
        this.id = product.id;
        this.nome = product.nome;
        this.descricao = product.descricao;
        this.precoCompra = product.precoCompra;
        this.precoVenda = product.precoVenda;
    }

    convertObj(user: User): Product{
        let obj = new Product;
        obj.id = this.id;
        obj.nome = this.nome;
        obj.descricao = this.descricao;
        obj.precoCompra = this.precoCompra;
        obj.precoVenda = this.precoVenda;
        return obj;
    }

}
