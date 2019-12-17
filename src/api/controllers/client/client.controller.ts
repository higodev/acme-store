import { 
    Controller, 
    Get, 
    Param, 
    Post, 
    Body, 
    Put, 
    Delete,  
    HttpStatus
} from '@nestjs/common';
import { ClientService } from 'src/api/services/client/client.service';
import { ApiTags } from '@nestjs/swagger';
import { Client } from 'src/api/entities/client.entity';

@ApiTags('client')
@Controller('api/v1/user/:id/client')
export class ClientController{

    constructor(private readonly service: ClientService){}
    
    @Get('')
    async findAll(@Param('id') user){
        try{
            return this.service.findAll(user);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Get(':clientId')
    async findById(@Param('id') user, @Param('clientId') clientId){
        try{
            return this.service.findById(user, clientId);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Post('')
    async save(@Param('id') user, @Body() client: Client){
        try{
            return this.service.save(user, client);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Put(':clientId')
    async update(@Param('id') user, @Param('clientId') clientId, @Body() client: Client){
        try{
            return this.service.update(user, client, clientId);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Delete(':clientId')
    async delete(@Param('id') userId, @Param('clientId') clientId){
        try{
            this.service.delete(userId, clientId);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

}
