import { 
    PrimaryGeneratedColumn, 
    Column, 
    Entity, 
    ManyToOne, 
    JoinColumn 
} from "typeorm";
import { Product } from "./product.entity";
import { Sale } from "./sale.entity";

@Entity({name: "sales_items"})
export class SaleItem{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: 0})
    quantidade: number;

    @Column({default: 0})
    preco: number;

    @ManyToOne(type => Sale, sale => sale.items)
    @JoinColumn({name: "sale_id"})
    sale: Sale;

    @ManyToOne(type => Product, product => product.saleItems)
    @JoinColumn({name: "product_id"})
    product: Product;

}