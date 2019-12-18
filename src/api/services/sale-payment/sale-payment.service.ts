import { Injectable } from '@nestjs/common';
import { SalePayment } from 'src/api/entities/sale-payment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Double } from 'typeorm';
import { Payment } from 'src/api/entities/payment.entity';
import { Sale } from 'src/api/entities/sale.entity';

@Injectable()
export class SalePaymentService {
    
    constructor(@InjectRepository(SalePayment) private readonly repository: Repository<SalePayment>){}

    getPayment(paymentId):Promise<Payment>{
        return Payment.findOne({ id: paymentId });
    }
    
    getCalcTotal(valuePay, valueDescPerc){
        if(valueDescPerc > 0){
            return valuePay - ((valuePay * valueDescPerc)/100);
        }else{
            return valuePay; 
        }
    }

    async findById(sale, paymentId: number): Promise<SalePayment>{
        return await this.repository.findOne({id: paymentId, sale: sale});
    }

    async findAll(sale): Promise<SalePayment[]>{
        return await this.repository.find({
            where: [{sale: sale}]
        });
    }

    async save(sale, salePayment: SalePayment): Promise<SalePayment>{
        let paymentSale = await this.getPayment(salePayment.payment);
        let valueCalc = await this.getCalcTotal(salePayment.valor, paymentSale.descontoPercentual);
        this.updateStatusSale(sale, salePayment.valor, salePayment.valor-valueCalc);
        salePayment.sale = sale;
        salePayment.valor = valueCalc;
        return await this.repository.save(salePayment);
    }

    async getTotalPayments(saleId): Promise<number>{
        let payments = await SalePayment.find({ sale: saleId });
        let total = payments.map(item => Number(item.valor));
        return total.reduce((a, b)=> a + b, 0);
    }

    async updateStatusSale(saleId, valorPago, valorDesconto){

        let sale = await Sale.findOne({id: saleId});
        let totalSale = sale.totalSale;
        let totalPayments = await this.getTotalPayments(saleId);

        let strStatus = "";
        let valorComparar = totalPayments + valorPago;

        if(Number(totalSale) == Number(valorComparar)){
            strStatus = "PAGO";
        }else if(Number(valorComparar) == 0){
            strStatus = "EM ABERTO";
        }else if(Number(valorComparar) > Number(totalSale)){
            strStatus = "PAGO MAIS";
        }else{
            strStatus = "PAGO PARCIAL";
        }
        
        if(strStatus == "PAGO" && Number(valorDesconto)>0){
            sale.desconto = valorDesconto;
        }
        
        sale.status = strStatus
        await sale.save();

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
