import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/api/entities/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {

    constructor(@InjectRepository(Client) private readonly repository: Repository<Client>){}

    async findById(user:number, clientId: number): Promise<Client>{
        return await this.repository.findOne(clientId);
        // let client = await this.repository.findOne(clientId);
        // if(user === client.user.id){
        //     return client;
        // }
    }

    async findAll(user): Promise<Client[]>{
        let clients = await this.repository.find({
            where: [{user: user}]
        });
        return clients;
    }

    async save(user, client: Client): Promise<Client>{
        client.user = user;
        return this.repository.save(client);
    }

    async update(user, client: Client, clientId: number): Promise<Client>{
        if(client.id == clientId){
            client.user = user
            return await this.repository.save(client);
        }
    }
    
    async delete(user, clientId: number){
        let client = await this.repository.findOne(clientId);
        if(client.id == clientId && client.user == user){
            this.repository.delete({id: clientId})
        }
    }

}
