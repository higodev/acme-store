import { 
    Controller, 
    Get, 
    Param, 
    Post, 
    Body, 
    Put, 
    Delete
} from '@nestjs/common';
import { UserService } from 'src/api/services/user/user.service';
import { UserDto } from 'src/api/dtos/user/user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('api/v1/user')
export class UserController {

    constructor(private readonly service: UserService){}

    @Get('')
    async findAll(){
        return this.service.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id){
        return this.service.findById(id);
    }

    @Post('')
    async save(@Body() userDto: UserDto){
        return this.service.save(userDto);
    }

    @Put(':id')
    async update(@Body() userDto: UserDto, @Param('id') id){
        return this.service.update(userDto, id);
    }

    @Delete(':id')
    async delete(@Param('id') id){
        this.service.delete(id);
    }
}