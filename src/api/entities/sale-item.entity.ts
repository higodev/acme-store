import { 
    PrimaryGeneratedColumn, 
    Column, 
    Entity, 
    ManyToOne, 
    JoinColumn, 
    Double
} from "typeorm";
import { Product } from "./product.entity";
import { Sale } from "./sale.entity";

@Entity({name: "sales_items"})
export class SaleItem{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column("decimal", { precision: 5, scale: 2, default: 0})
    quantidade: number;

    @Column("decimal", { precision: 5, scale: 2, default: 0})
    preco: number;

    @ManyToOne(type => Sale, sale => sale.items)
    @JoinColumn({name: "sale_id"})
    sale: Sale;

    @ManyToOne(type => Product, product => product.saleItems)
    @JoinColumn({name: "product_id"})
    product: Product;

}