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
import { ProductService } from 'src/api/services/product/product.service';
import { ApiTags } from '@nestjs/swagger';
import { Product } from 'src/api/entities/product.entity';

@ApiTags('product')
@Controller('api/v1/user/:id/product')
export class ProductController {

    constructor(private readonly service: ProductService){}

    @Get('')
    async findAll(@Param('id') user){
        try{
            return this.service.findAll(user);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Get(':productId')
    async findById(@Param('id') user, @Param('productId') productId){
        try{
            return this.service.findById(user, productId);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Post('')
    async save(@Param('id') user, @Body() product: Product){
        try{
            return this.service.save(user, product);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Put(':productId')
    async update(@Param('id') user, @Param('productId') productId, @Body() product: Product){
        try{
            return this.service.update(user, product, productId);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Delete(':productId')
    async delete(@Param('id') user, @Param('productId') productId){
        try{
            this.service.delete(user, productId);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

}