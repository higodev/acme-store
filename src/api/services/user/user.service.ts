import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/api/entities/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from 'src/api/dtos/user/user.dto';

@Injectable()
export class UserService {
    user
    constructor(@InjectRepository(User) private readonly repository: Repository<User>){}

    async findById(id: number): Promise<User>{
        return await this.repository.findOne(id);
    }

    async findAll(): Promise<User[]>{
        return await this.repository.find();
    }

    async save(userDto: UserDto): Promise<User>{
        return await this.repository.create(userDto);
    }

    async update(userDto: UserDto, id: number): Promise<User>{
        if(this.repository.findOne(id) != null){
            return await this.repository.save(userDto.convertObj());
        }
    }
    
    async delete(id: number){
        if(this.repository.findOne(id)!= null){
            this.repository.delete({id})
        }
    }

}
