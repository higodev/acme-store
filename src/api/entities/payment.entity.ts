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

@Entity({name: "payments"})
export class Payment{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    nome: string;

    @Column()
    desconto: number

    @ManyToOne(type => User, user => user.payments)
    @JoinColumn({name: "user_id"})
    user: User;

    @OneToMany(type => SalePayment, salePayment => salePayment.payment)
    salePayment:SalePayment;

}