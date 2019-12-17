import { 
    PrimaryGeneratedColumn, 
    Column, 
    Entity, 
    ManyToOne, 
    OneToMany, 
    JoinColumn 
} from "typeorm";
import { User } from "./user.entity";
import { Client } from "./client.entity";
import { SaleItem } from "./sale-item.entity";
import { SalePayment } from "./sale-payment.entity";
import { ApiPropertyOptional, ApiProperty } from "@nestjs/swagger";

@Entity({name: "sales"})
export class Sale{
    
    @ApiPropertyOptional()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiPropertyOptional()
    @Column({ name: 'data_pedido', type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    dataPedido: Date;
    
    @ManyToOne(type => Client, client => client.sales)
    @JoinColumn({name: "client_id"})
    client: Client;

    @ManyToOne(type => User, user => user.sales)
    @JoinColumn({name: "user_id"})
    user: User;

    @OneToMany(type => SaleItem, items => items.sale, {cascade: ["remove"]})
    items: SaleItem[];

    @OneToMany(type=> SalePayment, payment =>payment, {cascade: ["remove"]})
    payments: SalePayment[];

}