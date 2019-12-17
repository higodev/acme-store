import { Injectable } from '@nestjs/common';
import { SalePayment } from 'src/api/entities/sale-payment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Double } from 'typeorm';
import { Payment } from 'src/api/entities/payment.entity';

@Injectable()
export class SalePaymentService {
    
    constructor(@InjectRepository(SalePayment) private readonly repository: Repository<SalePayment>){}

    calculaTotal(salePayment: SalePayment){

        let payment = salePayment.payment;
        let desc = payment.desconto;
        let tot = 0;

        if(desc > 0){
            tot = salePayment.valor - ((salePayment.valor * 5)/100);
        }else{
            tot = salePayment.valor; 
        }

        return tot;
    }

    async findById(sale, paymentId: number): Promise<SalePayment>{
        return await this.repository.findOne({id: paymentId, sale: sale});
    }

    async findAll(sale): Promise<SalePayment[]>{
        return await this.repository.find({
            where: [{sale: sale}]
        });
    }

    async save(sale, pay: SalePayment): Promise<SalePayment>{
        pay.sale = sale;
        pay.valor = this.calculaTotal(pay);
        return await this.repository.save(pay);
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
