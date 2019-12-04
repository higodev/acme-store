import { PrimaryGeneratedColumn, Column } from "typeorm";
import { Product } from "./product.entity";
import { Sale } from "./sale.entity";

export class SaleItem{
    
    @PrimaryGeneratedColumn()
    id: number;

    sale: Sale;

    product: Product;

    quantidade: number;

}