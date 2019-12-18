import { 
    PrimaryGeneratedColumn, 
    Column, 
    Entity, 
    ManyToOne, 
    JoinColumn, 
    Double,
    BaseEntity
} from "typeorm";
import { Product } from "./product.entity";
import { Sale } from "./sale.entity";
import { ApiPropertyOptional, ApiProperty } from "@nestjs/swagger";

@Entity({name: "sales_items"})
export class SaleItem extends BaseEntity{
    
    @ApiPropertyOptional()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column("decimal", { precision: 5, scale: 2, default: 0})
    quantidade: number;

    @ApiProperty()
    @Column("decimal", { precision: 5, scale: 2, default: 0})
    preco: number;
    
    @Column("decimal", { precision: 5, scale: 2, default: 0, name: "total_item"})
    totalItem: number;

    @ManyToOne(type => Sale, sale => sale.items)
    @JoinColumn({name: "sale_id"})
    sale: Sale;
    
    @ManyToOne(type => Product, product => product.saleItems)
    @JoinColumn({name: "product_id"})
    product: Product;
    static filter: any;

}