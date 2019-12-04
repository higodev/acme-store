import { ManyToOne, Entity, PrimaryGeneratedColumn, JoinColumn, Column } from "typeorm";
import { Sale } from "./sale.entity";
import { Payment } from "./payment.entity";

@Entity({name: "sales_payments"})
export class SalePayment{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    valor: number;

    @ManyToOne(type => Sale, sale => sale.payments)
    @JoinColumn({name: "sale_id"})
    sale: Sale;

    @ManyToOne(type => Payment, payment => payment.salePayment)
    @JoinColumn({name: "payment_id"})
    payment: Payment;

}