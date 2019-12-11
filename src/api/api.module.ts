import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './services/user/user.service';
import { UserController } from './controllers/user/user.controller';
import { User } from './entities/user.entity';
import { Client } from './entities/client.entity';
import { ClientController } from './controllers/client/client.controller';
import { ClientService } from './services/client/client.service';


@Module({
    imports: [TypeOrmModule.forFeature([User, Client])],
    controllers: [UserController, ClientController],
    providers: [UserService, ClientService],
})
export class ApiModule {}
