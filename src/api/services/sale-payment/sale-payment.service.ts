import { Injectable } from '@nestjs/common';
import { SalePayment } from 'src/api/entities/sale-payment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SalePaymentService {

    
    constructor(@InjectRepository(SalePayment) private readonly repository: Repository<SalePayment>){}

    async findById(sale, paymentId: number): Promise<SalePayment>{
        return await this.repository.findOne({id: paymentId, sale: sale});
    }

    async findAll(sale): Promise<SalePayment[]>{
        return await this.repository.find({
            where: [{sale: sale}]
        });
    }

    async save(sale, payment: SalePayment): Promise<SalePayment>{
        payment.sale = sale;
        return this.repository.save(payment);
    }

    async update(sale, payment: SalePayment, itemId: number): Promise<SalePayment>{
        if(payment.id == itemId){
            payment.sale = sale;
            return await this.repository.save(payment);
        }
    }
    
    async delete(sale, paymentId: number){
        this.repository.delete({id: paymentId, sale: sale});
    }

}
