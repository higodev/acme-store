import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/api/entities/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from 'src/api/dtos/user/user.dto';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly repository: Repository<User>){}

    fromDto(userDto: UserDto): User{
        let obj = new User()
        obj.nome = userDto.nome;
        obj.cnpj = userDto.cnpj;
        obj.email = userDto.email;
        obj.senha = userDto.senha;
        return obj;
    }

    async findById(id: number): Promise<UserDto>{
        let user = await this.repository.findOne(id);
        return new UserDto(user);
    }

    async findAll(): Promise<UserDto[]>{
        let users = await this.repository.find();
        return users.map(user => new UserDto(user));
    }

    async save(userDto: UserDto): Promise<User>{
        let user  = this.fromDto(userDto);
        return this.repository.save(user);
    }

    async update(userDto: UserDto, id: number): Promise<User>{
        let user = await this.repository.findOne(id);
        if(user.id = id){
            let userUpdate = this.fromDto(userDto);
            return await this.repository.save(userUpdate);
        }
    }
    
    async delete(id: number){
        if(this.repository.findOne(id)!= null){
            this.repository.delete({id})
        }
    }

}
