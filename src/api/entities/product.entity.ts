import { PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, Entity } from "typeorm";
import { User } from "./user.entity";
import { SaleItem } from "./sale-item.entity";

@Entity({name: "products"})
export class Product{

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({length:100})
    nome: string;

    @Column()
    descricao: string;

    @Column({default:0, name: "preco_compra"})
    precoCompra: number;

    @Column({default:0, name: "preco_venda"})
    precoVenda: number;

    @ManyToOne(type => User, user => user.products)
    @JoinColumn({name:"user_id"})
    user: User;

    @OneToMany(type => SaleItem, items => items.product)
    saleItems: SaleItem[];

}