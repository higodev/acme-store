import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { ClientService } from './api/services/client.service';
import { ClientController } from './api/controllers/client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import "reflect-metadata";

@Module({
  imports: [
    ApiModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      host: 'localhost',
      username: 'root',
      password: 'root',
      database: 'acme-store',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    })],
  controllers: [AppController, ClientController],
  providers: [AppService, ClientService],
})
export class AppModule {}