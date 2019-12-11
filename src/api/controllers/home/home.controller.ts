import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('acme')
@Controller('/')
export class HomeController {}
