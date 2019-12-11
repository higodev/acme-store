import { Controller, Get, Param, Post, Body, Put, Delete  } from '@nestjs/common';
import { ProductService } from 'src/api/services/product/product.service';
import { ApiTags } from '@nestjs/swagger';
import { ProductDto } from 'src/api/dtos/product/product.dto';

@ApiTags('product')
@Controller('api/v1/user/:id/product')
export class ProductController {

    constructor(private readonly service: ProductService){}

    @Get('')
    async findAll(@Param('id') user){
        this.service.findAll(user);
    }

    @Get(':productId')
    async findById(@Param('id') user, @Param('productId') productId){
        this.service.findById(user, productId);
    }

    @Post('')
    async save(@Param('id') user, @Body() productDto: ProductDto){
        this.service.save(user, productDto);
    }

    @Put(':productId')
    async update(@Param('id') user, @Param('productId') productId, @Body() productDto: ProductDto){
        this.service.update(user, productDto, productId);
    }

    @Delete(':clientId')
    async delete(@Param('id') user, @Param('productId') productId){
        this.service.delete(user, productId);
    }

}
