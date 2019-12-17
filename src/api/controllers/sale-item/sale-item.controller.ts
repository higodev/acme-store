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

@ApiTags('sale-item')
@Controller('api/v1/user/:id/sale/:idSale/sale-item')
export class SaleItemController {

    constructor(private readonly service: SaleItemService){}

    @Get('')
    async findAll(@Param('idSale') sale){
        try{
            return this.service.findAll(sale);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Get(':itemId')
    async findById(@Param('idSale') sale, @Param('itemId') itemId){
        try{
            return this.service.findById(sale, itemId);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Post('')
    async save(@Param('idSale') sale, @Body() saleItem: SaleItem){
        try{
            return this.service.save(sale, saleItem);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Put(':itemId')
    async update(@Param('idSale') sale, @Param('itemId') itemId, @Body() saleItem: SaleItem){
        try{
            return this.service.update(sale, saleItem, itemId);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Delete(':itemId')
    async delete(@Param('idSale') sale, @Param('itemId') itemId){
        try{
            this.service.delete(sale, itemId);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

}
