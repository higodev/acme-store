import { 
    PrimaryGeneratedColumn,
    Entity,
    Column, 
    OneToMany, 
    ManyToOne, 
    JoinColumn, 
    BaseEntity
} from "typeorm";
import { SalePayment } from "./sale-payment.entity";
import { User } from "./user.entity";
import { ApiPropertyOptional, ApiProperty } from "@nestjs/swagger";

@Entity({name: "payments"})
export class Payment extends BaseEntity{

    @ApiPropertyOptional()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({length: 50})
    nome: string;

    @ApiProperty()
    @Column("decimal", { precision: 5, scale: 2, default: 0, name: "desconto_percentual"})
    descontoPercentual: number;
    
    @ManyToOne(type => User, user => user.payments)
    @JoinColumn({name: "user_id"})
    user: User;

    @OneToMany(type => SalePayment, salePayment => salePayment.payment)
    salePayment:SalePayment;

}