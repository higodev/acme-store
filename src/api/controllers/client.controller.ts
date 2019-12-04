import { Controller, Get, Param } from "@nestjs/common";
import { ClientService } from "../services/client.service";

@Controller('api/v1/clients')
export class ClientController{

    constructor(private readonly service: ClientService) {}

    @Get(':id')
    async findById(@Param('id') id){
        return await this.service.findById(id);
    }

}