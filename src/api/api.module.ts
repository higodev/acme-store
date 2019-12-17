import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './services/user/user.service';
import { UserController } from './controllers/user/user.controller';
import { User } from './entities/user.entity';
import { Client } from './entities/client.entity';
import { ClientController } from './controllers/client/client.controller';
import { ClientService } from './services/client/client.service';
import { Product } from './entities/product.entity';
import { ProductController } from './controllers/product/product.controller';
import { ProductService } from './services/product/product.service';
import { AuthService } from './auth/auth.service';
import { Sale } from './entities/sale.entity';
import { Payment } from './entities/payment.entity';
import { PaymentController } from './controllers/payment/payment.controller';
import { SaleController } from './controllers/sale/sale.controller';
import { SaleService } from './services/sale/sale.service';
import { PaymentService } from './services/payment/payment.service';
import { SaleItemService } from './services/sale-item/sale-item.service';
import { SalePaymentService } from './services/sale-payment/sale-payment.service';
import { SaleItemController } from './controllers/sale-item/sale-item.controller';
import { SalePaymentController } from './controllers/sale-payment/sale-payment.controller';
import { SaleItem } from './entities/sale-item.entity';
import { SalePayment } from './entities/sale-payment.entity';

@Module({
    imports: [TypeOrmModule.forFeature([
        User, 
        Client, 
        Product,
        Payment,
        Sale,
        SaleItem,
        SalePayment
    ])],
    controllers: [
        UserController,
        ClientController, 
        ProductController,
        PaymentController,
        SaleController,
        SaleItemController,
        SalePaymentController
    ],
    providers: [
        UserService, 
        ClientService, 
        ProductService, 
        PaymentService,
        SaleService,
        SaleItemService,
        SalePaymentService,
        AuthService
    ],
})
export class ApiModule {}
