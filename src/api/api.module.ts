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

@Module({
    imports: [TypeOrmModule.forFeature([
        User, 
        Client, 
        Product
    ])],
    controllers: [
        UserController,
        ClientController, 
        ProductController
    ],
    providers: [
        UserService, 
        ClientService, 
        ProductService, 
        AuthService
    ],
})
export class ApiModule {}
