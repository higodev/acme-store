import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/api/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    
    constructor(@InjectRepository(User) private readonly repository: Repository<User>){}
    
    async findById(id: number): Promise<User>{
        return await this.repository.findOne(id);
    }

    async findAll(): Promise<User[]>{
        return await this.repository.find();
    }

    async save(user: User): Promise<User>{
        return this.repository.save(user);
    }

    async update(user: User, id: number): Promise<User>{
        if (user.id == id){
            return await this.repository.save(user);
        }
    }
    
    async delete(id: number){
        this.repository.delete({id})
    }

}
