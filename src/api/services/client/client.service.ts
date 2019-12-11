import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/api/entities/client.entity';
import { Repository } from 'typeorm';
import { ClientDto } from 'src/api/dtos/client/client.dto';

@Injectable()
export class ClientService {

    constructor(@InjectRepository(Client) private readonly repository: Repository<Client>){}

    async findById(user, clientId: number): Promise<Client>{
        let client = await this.repository.findOne(clientId);
        if(client.user == user){
            return client;
        }
    }

    async findAll(user): Promise<ClientDto[]>{
        let clients = await this.repository.find({
            where: [{user: user}]
        });
        return clients.map(client => new ClientDto(client));
    }

    async save(user, clientDto: ClientDto): Promise<Client>{
        return await this.repository.create(clientDto.convertObj(user));
    }

    async update(user, clientDto: ClientDto, clientId: number): Promise<Client>{
        if(this.repository.findOne(clientId) != null){
            return await this.repository.save(clientDto.convertObj(user));
        }
    }
    
    async delete(user, clientId: number){
        let client = await this.repository.findOne(clientId);
        if(client.id == clientId && client.user == user){
            this.repository.delete({id: clientId})
        }
    }

}
