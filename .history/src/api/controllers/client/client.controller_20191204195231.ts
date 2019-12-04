import { Controller, Param, Get, HttpStatus } from '@nestjs/common';
import { ClientService } from 'src/api/services/client/client.service';
import { ApiBody } from '@nestjs/swagger';

@ApiBody()
@Controller('/api/v1/clients')
export class ClientController {

    constructor(private readonly service: ClientService){}

    @Get(':id')
    async findById(@Param('id') id) {
      try {
        return await this.service.findById(id);
      } catch (error) {
        return HttpStatus.BAD_REQUEST;
      }
    }

    @Get()
    async findAll(){
        return await this.service.findAll();
    }

}
