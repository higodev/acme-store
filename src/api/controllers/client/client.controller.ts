import { 
    Controller, 
    Get, 
    Param, 
    Post, 
    Body, 
    Put, 
    Delete  
} from '@nestjs/common';
import { ClientService } from 'src/api/services/client/client.service';
import { ClientDto } from 'src/api/dtos/client/client.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('client')
@Controller('api/v1/user/:id/client')
export class ClientController {

    constructor(private readonly service: ClientService){}
    
    @Get('')
    async findAll(@Param('id') user){
        this.service.findAll(user);
    }

    @Get(':clientId')
    async findById(@Param('id') user, @Param('idClient') clientId){
        this.service.findById(user, clientId);
    }

    @Post('')
    async save(@Param('id') user, @Body() clientDto: ClientDto){
        this.service.save(user, clientDto);
    }

    @Put(':clientId')
    async update(@Param('id') user, @Param('clientId') clientId, @Body() clientDto: ClientDto){
        this.service.update(user, clientDto, clientId);
    }

    @Delete(':clientId')
    async delete(@Param('id') user, @Param('clientId') clientId){
        this.service.delete(user, clientId);
    }

}
