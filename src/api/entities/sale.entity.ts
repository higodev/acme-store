import { 
    PrimaryGeneratedColumn, 
    Column, 
    Entity, 
    ManyToOne, 
    OneToMany, 
    JoinColumn, 
    BaseEntity
} from "typeorm";
import { User } from "./user.entity";
import { Client } from "./client.entity";
import { SaleItem } from "./sale-item.entity";
import { SalePayment } from "./sale-payment.entity";
import { ApiPropertyOptional, ApiProperty } from "@nestjs/swagger";

@Entity({name: "sales"})
export class Sale extends BaseEntity{
    
    @ApiPropertyOptional()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiPropertyOptional()
    @Column({ name: 'data_pedido', type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    dataPedido: Date;
    
    @ManyToOne(type => Client, client => client.sales)
    @JoinColumn({name: "client_id"})
    client: Client;

    @Column("decimal", { precision: 5, scale: 2, default: 0, name: "total_pedido"})
    totalSale: number;

    @Column("decimal", { precision: 5, scale: 2, default: 0, name: "desconto"})
    desconto: number;

    @Column({default:"EM ABERTO", length: 50, nullable: true})
    status: string;

    @ManyToOne(type => User, user => user.sales)
    @JoinColumn({name: "user_id"})
    user: User;

    @OneToMany(type => SaleItem, items => items.sale, {cascade: ["remove"]})
    items: SaleItem[];

    @OneToMany(type=> SalePayment, payment =>payment, {cascade: ["remove"]})
    payments: SalePayment[];

}