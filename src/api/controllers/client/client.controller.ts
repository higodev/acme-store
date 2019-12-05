import { Controller, Param, Get, HttpStatus, Post, Body, Delete, Put } from '@nestjs/common';
import { ClientService } from 'src/api/services/client/client.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ClientCreate } from 'src/api/dtos/client.create';

@ApiTags('Clients')
@Controller('/api/v1/')
export class ClientController {

    constructor(private readonly service: ClientService){}

    @Get()
    async findAll(){
        return await this.service.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id){
      try {
        return await this.service.findById(id);
      } catch (error) {
        return HttpStatus.BAD_REQUEST;
      }
    }

    @Get('users/idUser')
    async findByUser(@Param('idUser') idUser){
      return await this.service.findByUser(idUser);
    }

    @Post(':idUser')
    async save(@Body() body: ClientCreate, @Param('idUser') idUser){
      return await this.service.save(body, idUser);
    }

    @Put(':id')
    async update(){
      
    }

    @Delete(':id')
    async delete(@Param('id') id){
      return await this.service.delete(id);
    }

}
