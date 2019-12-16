import { Injectable } from '@nestjs/common';
import { Payment } from 'src/api/entities/payment.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PaymentService {

    constructor(@InjectRepository(Payment) private readonly repository: Repository<Payment>){}

    async findById(user, paymentId: number): Promise<Payment>{
        let payment = await this.repository.findOne(paymentId);
        return payment;
        // if(payment.user == user){
        //     return payment;
        // }
    }

    async findAll(user): Promise<Payment[]>{
        let products = await this.repository.find({
            where: [{user: user}]
        });
        return products;
    }

    async save(user, payment: Payment): Promise<Payment>{
        payment.user = user;
        return this.repository.save(payment);
    }

    async update(user, payment: Payment, paymentId: number): Promise<Payment>{
        if(payment.id == paymentId){
            payment.user = user;
            return await this.repository.save(payment);
        }
    }
    
    async delete(user, paymentId: number){
        let product = await this.repository.findOne(paymentId);
        if(product.id == paymentId && product.user == user){
            this.repository.delete({id: paymentId})
        }
    }

}
