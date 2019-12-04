import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientController } from './controllers/client.controller';
import { ClientService } from './services/client.service';
import "reflect-metadata";

@Module({
    imports:[
        TypeOrmModule.forRoot({
            type: 'mysql',
            port: 3306,
            host: 'localhost',
            username: 'root',
            password: 'root',
            database: 'acme-store',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true
          })
    ],
    controllers: [ClientController],
    providers: [ClientService],
})
export class ApiModule {}
