import { 
    Controller, 
    Get, 
    Param, 
    Post, 
    Body, 
    Put, 
    Delete,
    HttpStatus
} from '@nestjs/common';
import { UserService } from 'src/api/services/user/user.service';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/api/entities/user.entity';

@ApiTags('user')
@Controller('api/v1/user')
export class UserController {

    constructor(private readonly service: UserService){}

    @Get('')
    async findAll(){
        try{
            return this.service.findAll();
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Get(':id')
    async findById(@Param('id') id){
        try{
            return this.service.findById(id);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Post('')
    async save(@Body() user: User){
        // try{
            return this.service.save(user);
        // }catch(err){
        //     return HttpStatus.BAD_REQUEST;
        // }
    }

    @Put(':id')
    async update(@Body() user: User, @Param('id') id){
        try{
            return this.service.update(user, id);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }

    @Delete(':id')
    async delete(@Param('id') id){
        try{
            this.service.delete(id);
        }catch(err){
            return HttpStatus.BAD_REQUEST;
        }
    }
    
}