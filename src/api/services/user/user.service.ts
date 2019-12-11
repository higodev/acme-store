import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/api/entities/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from 'src/api/dtos/user/user.dto';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly repository: Repository<User>){}

    async findById(id: number): Promise<UserDto>{
        let user = await this.repository.findOne(id);
        return new UserDto(user);
    }

    async findAll(): Promise<UserDto[]>{
        let users = await this.repository.find();
        return users.map(user => new UserDto(user));
    }

    async save(userDto: UserDto): Promise<User>{
        return await this.repository.create(userDto.convertObj());
    }

    async update(userDto: UserDto, id: number): Promise<User>{
        let user = await this.repository.findOne(id);
        if(user.id == userDto.id){
            return await this.repository.save(userDto.convertObj());
        }
    }
    
    async delete(id: number){
        if(this.repository.findOne(id)!= null){
            this.repository.delete({id})
        }
    }

}
