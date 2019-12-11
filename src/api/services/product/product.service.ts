import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/api/entities/product.entity';
import { Repository } from 'typeorm';
import { ProductDto } from 'src/api/dtos/product/product.dto';

@Injectable()
export class ProductService {
    
    constructor(@InjectRepository(Product) private readonly repository: Repository<Product>){}

    async findById(user, productId: number): Promise<ProductDto>{
        let product = await this.repository.findOne(productId);
        if(product.user == user){
            return new ProductDto(product);
        }
    }

    async findAll(user): Promise<ProductDto[]>{
        let products = await this.repository.find({
            where: [{user: user}]
        });
        return products.map(product => new ProductDto(product));
    }

    async save(user, productDto: ProductDto): Promise<Product>{
        return this.repository.create(productDto.convertObj(user));
    }

    async update(user, productDto: ProductDto, productId: number): Promise<Product>{
        if(this.repository.findOne(productId) != null){
            return await this.repository.save(productDto.convertObj(user));
        }
    }
    
    async delete(user, productId: number){
        let product = await this.repository.findOne(productId);
        if(product.id == productId && product.user == user){
            this.repository.delete({id: productId})
        }
    }

}
