import { 
    PrimaryGeneratedColumn, 
    Column, 
    ManyToOne, 
    JoinColumn, 
    OneToMany, 
    Entity, 
    Double
} from "typeorm";
import { User } from "./user.entity";
import { SaleItem } from "./sale-item.entity";
import { ApiPropertyOptional, ApiProperty } from "@nestjs/swagger";

@Entity({name: "products"})
export class Product{

    @ApiPropertyOptional()
    @PrimaryGeneratedColumn()
    id: number;
    
    @ApiProperty()
    @Column({length:100, nullable: false})
    nome: string;

    @ApiProperty()
    @Column({nullable: false})
    descricao: string;

    @ApiPropertyOptional()
    @Column("decimal", { precision: 5, scale: 2, default:0, name: "preco_compra"})
    precoCompra: number;

    @ApiPropertyOptional()
    @Column("decimal", { precision: 5, scale: 2, default:0, name: "preco_venda"})
    precoVenda: number;

    @ManyToOne(type => User, user => user.products)
    @JoinColumn({name:"user_id"})
    user: User;

    @OneToMany(type => SaleItem, items => items.product)
    saleItems: SaleItem[];
}