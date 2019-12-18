import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SaleItem } from 'src/api/entities/sale-item.entity';
import { Repository } from 'typeorm';
import { Sale } from 'src/api/entities/sale.entity';

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

    async updateSale(saleId, totalItemCurrent){
        let items = await SaleItem.find({ sale: saleId });
        let total = items.map(item => item.quantidade * item.preco);
        let sale = await Sale.findOne({id: saleId});
        sale.totalSale = total.reduce((a, b)=> a + b, totalItemCurrent);
        await sale.save();
    }

    async save(saleId, item: SaleItem): Promise<SaleItem>{
        item.totalItem = item.quantidade * item.preco;
        item.sale = saleId;
        this.updateSale(saleId, item.quantidade * item.preco);
        return this.repository.save(item);
    }
    
    async update(sale, item: SaleItem, itemId: number): Promise<SaleItem>{
        if(item.id == itemId){
            item.sale = sale;
            return await this.repository.save(item);
        }
    }
    
    async delete(saleId, itemId: number){
        
        let sale = await Sale.findOne({id: saleId});
        let item = await SaleItem.findOne({id: itemId, sale: saleId})
        sale.totalSale = sale.totalSale - (item.quantidade * item.preco);
        await sale.save();
        await item.remove();
    }

}
