import { Injectable } from '@nestjs/common';
import { Client } from 'src/api/entities/client.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientDto } from 'src/api/dtos/client.dto';
import { ClientCreate } from 'src/api/dtos/client.create';

@Injectable()
export class ClientService {

    constructor(
        @InjectRepository(Client) private readonly repository: Repository<Client>
    ) {}
        
    fromCreateToObj(clientCreate: ClientCreate, user): Client{
        return new Client(clientCreate, user);
    }

    fromListToListDto(clients: Client[]): ClientDto[]{
        return clients.map(client => new ClientDto(client));
    }

    async findAll(): Promise<ClientDto[]>{
        return this.fromListToListDto(await this.repository.find());
    }


    async findById(id): Promise<ClientDto>{
        return new ClientDto(await this.repository.findOne({ id }));
    }

    async findByUser(idUser): Promise<ClientDto[]>{
        let clients = await this.repository.find({
            where: [
                { user: idUser }
            ]
        })
        return this.fromListToListDto(clients);
    }

    async save(clientCreate: ClientCreate, idUser){
        return this.repository.create(new Client(clientCreate, idUser));
    }

    async update(dto: ClientDto, id){
        let obj = await this.repository.findOne({id});
        if (obj != null){
            return this.repository.save(this.fromCreateToObj(dto, obj.user));
        }
    }

    async delete(id){
        this.repository.delete({id});
    }

}