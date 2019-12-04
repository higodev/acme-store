import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { ClientService } from './api/services/client.service';
import { ClientController } from './api/controllers/client.controller';

@Module({
  imports: [ApiModule],
  controllers: [AppController, ClientController],
  providers: [AppService, ClientService],
})
export class AppModule {}
