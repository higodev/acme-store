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

@ApiTags('sale-item')
@Controller('api/v1/user/:id/sale/:idSale/sale-item')
export class SaleItemController {


    constructor(private readonly service: SaleItemService){}

    @Get('')
    async findAll(@Param('id') user){
        try{
            return this.service.findAll(user);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Get(':saleId')
    async findById(@Param('id') user, @Param('saleId') saleId){
        try{
            return this.service.findById(user, saleId);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Post('')
    async save(@Param('id') user, @Body() sale: Sale){
        try{
            return this.service.save(user, sale);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Put(':saleId')
    async update(@Param('id') user, @Param('saleId') saleId, @Body() sale: Sale){
        try{
            return this.service.update(user, sale, saleId);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Delete(':saleId')
    async delete(@Param('id') user, @Param('saleId') saleId){
        try{
            this.service.delete(user, saleId);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }


}
