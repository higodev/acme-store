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
import { PaymentService } from 'src/api/services/payment/payment.service';
import { ApiTags } from '@nestjs/swagger';
import { Payment } from 'src/api/entities/payment.entity';

@ApiTags('payment')
@Controller('api/v1/user/:id/payment')
export class PaymentController {

    constructor(private readonly service: PaymentService){}

    @Get('')
    async findAll(@Param('id') user){
        try{
            return this.service.findAll(user);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Get(':paymentId')
    async findById(@Param('id') user, @Param('paymentId') paymentId){
        try{
            return this.service.findById(user, paymentId);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Post('')
    async save(@Param('id') user, @Body() payment: Payment){
        try{
            return this.service.save(user, payment);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Put(':paymentId')
    async update(@Param('id') user, @Param('paymentId') paymentId, @Body() payment: Payment){
        try{
            return this.service.update(user, payment, paymentId);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Delete(':paymentId')
    async delete(@Param('id') user, @Param('paymentId') paymentId){
        try{
            this.service.delete(user, paymentId);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

}
