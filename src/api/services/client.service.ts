import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Client } from "../entities/client.entity";
import { ClientDto } from "../dtos/client.dto";

export class ClientService{

    constructor(@InjectRepository(Client)
        private readonly repository: Repository<Client>
    ){}

    async findById(id): Promise<Client>  {
        return await this.repository.findOne({id});
    }

}