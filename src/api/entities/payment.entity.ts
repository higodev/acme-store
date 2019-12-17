import { 
    PrimaryGeneratedColumn,
    Entity,
    Column, 
    OneToMany, 
    ManyToOne, 
    JoinColumn 
} from "typeorm";
import { SalePayment } from "./sale-payment.entity";
import { User } from "./user.entity";
import { ApiPropertyOptional, ApiProperty } from "@nestjs/swagger";

@Entity({name: "payments"})
export class Payment{

    @ApiPropertyOptional()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({length: 50})
    nome: string;

    @ApiProperty()
    @Column({default: 0})
    desconto: number
    
    @ManyToOne(type => User, user => user.payments)
    @JoinColumn({name: "user_id"})
    user: User;

    @OneToMany(type => SalePayment, salePayment => salePayment.payment)
    salePayment:SalePayment;

}