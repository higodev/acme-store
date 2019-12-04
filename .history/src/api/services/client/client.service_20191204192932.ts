import { Injectable } from '@nestjs/common';
import { Client } from 'src/api/entities/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {

    constructor(@Injectable(Client)
        private readonly repository: Repository<Client>){}

}
