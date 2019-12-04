import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import "reflect-metadata";

@Module({
  imports: [ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
