import { 
    PrimaryGeneratedColumn, 
    ManyToOne, 
    Entity, 
    JoinColumn, 
    Column, 
    BaseEntity
} from "typeorm";
import { Sale } from "./sale.entity";
import { Payment } from "./payment.entity";
import { ApiPropertyOptional, ApiProperty } from "@nestjs/swagger";

@Entity({name: "sales_payments"})
export class SalePayment extends BaseEntity{

    @ApiPropertyOptional()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column("decimal", { precision: 5, scale: 2, default: 0})
    valor: number;

    @ManyToOne(type => Sale, sale => sale.payments)
    @JoinColumn({name: "sale_id"})
    sale: Sale;

    @ApiProperty()
    @ManyToOne(type => Payment, payment => payment.salePayment)
    @JoinColumn({name: "payment_id"})
    payment: Payment;

}