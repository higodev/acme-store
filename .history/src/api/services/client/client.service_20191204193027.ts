import { Injectable } from '@nestjs/common';
import { Client } from 'src/api/entities/client.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClientService {

    constructor(@InjectRepository(Client)
        private readonly repository: Repository<Client>)
        {}



}
