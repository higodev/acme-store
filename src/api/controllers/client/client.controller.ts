import { Controller, Param, Get, HttpStatus, Post, Body, Delete, Put } from '@nestjs/common';
import { ClientService } from 'src/api/services/client/client.service';
import { ApiTags } from '@nestjs/swagger';
import { ClientCreate } from 'src/api/dtos/client.create';

@ApiTags('clients')
@Controller('/api/v1/user')
export class ClientController {

    constructor(private readonly service: ClientService){}

    @Get('user/:idUser/client/:idClient')
    async findById(@Param('idUser') idUser, @Param('idClient') idClient){
        return await this.service.findById(idUser, idClient);
    }

    @Get('user/:idUser/client')
    async findByUser(@Param('idUser') idUser){
      return await this.service.findByUser(idUser);
    }

    @Post('user/:idUser/client')
    async save(@Param('idUser') idUser, @Body() client: ClientCreate){
      return await this.service.save(idUser, client);
    }

    @Put('user/:idUser/client/:idClient')
    async update(@Param('idUser') idUser, @Param('idClient') idClient){
      return await this.service.delete(idUser, idClient);
    }

    @Delete('user/:idUser/client/:idClient')
    async delete(@Param('idUser') idUser, @Param('idClient') idClient){
      return await this.service.delete(idUser, idClient);
    }

}
