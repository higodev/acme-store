import { 
    Controller, 
    Get, 
    Param, 
    Post, 
    Body, 
    Put, 
    Delete,  
    HttpStatus
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SaleItemService } from 'src/api/services/sale-item/sale-item.service';
import { SaleItem } from 'src/api/entities/sale-item.entity';
import { SalePaymentService } from 'src/api/services/sale-payment/sale-payment.service';
import { SalePayment } from 'src/api/entities/sale-payment.entity';

@ApiTags('sale-payment')
@Controller('api/v1/user/:id/sale/:idSale/sale-payment')
export class SalePaymentController {

    constructor(private readonly service: SalePaymentService){}

    @Get('')
    async findAll(@Param('idSale') sale){
        try{
            return this.service.findAll(sale);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Get(':paymentId')
    async findById(@Param('idSale') sale, @Param('paymentId') paymentId){
        try{
            return this.service.findById(sale, paymentId);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Post('')
    async save(@Param('idSale') sale, @Body() salePayment: SalePayment){
        try{
            return this.service.save(sale, salePayment);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Put(':paymentId')
    async update(@Param('idSale') sale, @Param('paymentId') paymentId, @Body() salePayment: SalePayment){
        try{
            return this.service.update(sale, salePayment, paymentId);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Delete(':paymentId')
    async delete(@Param('idSale') sale, @Param('paymentId') paymentId){
        try{
            this.service.delete(sale, paymentId);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

}
