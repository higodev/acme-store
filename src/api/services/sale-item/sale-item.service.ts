import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SaleItem } from 'src/api/entities/sale-item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SaleItemService {

    constructor(@InjectRepository(SaleItem) private readonly repository: Repository<SaleItem>){}

    async findById(sale, itemId: number): Promise<SaleItem>{
        return await this.repository.findOne({id: itemId, sale: sale});
    }

    async findAll(sale): Promise<SaleItem[]>{
        return await this.repository.find({
            where: [{sale: sale}]
        });
    }

    async save(sale, item: SaleItem): Promise<SaleItem>{
        item.sale = sale;
        return this.repository.save(item);
    }

    async update(sale, item: SaleItem, itemId: number): Promise<SaleItem>{
        if(item.id == itemId){
            item.sale = sale;
            return await this.repository.save(item);
        }
    }
    
    async delete(sale, itemId: number){
        this.repository.delete({id: itemId, sale: sale});
    }

}
