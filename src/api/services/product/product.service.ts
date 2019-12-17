import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/api/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    
    constructor(@InjectRepository(Product) private readonly repository: Repository<Product>){}

    async findById(user, productId: number): Promise<Product>{
        return await this.repository.findOne({id: productId, user: user});
    }

    async findAll(user): Promise<Product[]>{
        return await this.repository.find({
            where: [{user: user}]
        });
    }

    async save(user, product: Product): Promise<Product>{
        product.user = user;
        return this.repository.save(product);
    }

    async update(user, product: Product, productId: number): Promise<Product>{
        if(product.id == productId){
            product.user = user;
            return await this.repository.save(product);
        }
    }
    
    async delete(user, productId: number){
        this.repository.delete({id: productId, user: user});
    }

}
