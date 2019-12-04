import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";
import { Product } from "./product.entity";
import { Sale } from "./sale.entity";

@Entity()
export class SaleItem{
    
    @PrimaryGeneratedColumn()
    id: number;

    sale: Sale;

    product: Product;

    quantidade: number;

}