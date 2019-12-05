import { Injectable, HttpStatus } from '@nestjs/common';
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

    fromCreateToObj(creat: ClientCreate, user){
        let client = new Client();
        client.nome = creat.nome;
        client.email = creat.email;
        client.cpfCnpj = creat.cpfCnpj;
        client.user = user;
        return client;
    }

    fromListToListDto(clients: Client[]): ClientDto[]{
        return clients.map(client => new ClientDto(client));
    }

    async fromDtoToObj(dto: ClientDto): Promise<Client>{
        let client = await this.repository.findOne(dto.id);
        client.id = dto.id;
        client.nome = dto.nome;
        return client;
    }

    async isClientValid(idUser, idClient): Promise<Client>{
        let client = await this.repository.findOne(idClient);
        if(client == null){return;}
        if(client.user != idUser){return;}
        return client;
    }

    async findById(idUser, idClient): Promise<ClientDto>{
        return new ClientDto(await this.repository.findOne(idClient));
    }

    async findByUser(idUser): Promise<ClientDto[]>{
        let clients = await this.repository.find({
            where: [
                { user: idUser }
            ]
        })
        return this.fromListToListDto(clients);
    }

    async save(idUser, client: ClientCreate){
        return await this.repository.save(this.fromCreateToObj(client, idUser));
    }

    async update(idUser, idClient, clientDto: ClientDto){

        let client = await this.isClientValid(idUser, idClient);

        if(client == null){
            return await HttpStatus.BAD_REQUEST
        }

        client.nome = clientDto.nome
        client.cpfCnpj = clientDto.cpfCnpj

        return await this.repository.save(client);
    }

    async delete(idUser, idClient){

        let client = await this.isClientValid(idUser, idClient);

        if(client == null){
            return await HttpStatus.BAD_REQUEST
        }
        
        this.repository.delete({id: idClient});
    }

}