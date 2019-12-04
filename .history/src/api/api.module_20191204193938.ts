import { Module } from '@nestjs/common';
import { ClientController } from './controllers/client/client.controller';
import { ClientService } from './services/client/client.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Client])],
    controllers: [ClientController],
    providers: [ClientService],
})
export class ApiModule {}
