import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';

@Controller('entity')
export class EntityController {
  @Get('sample')
  getSample() {
    return { message: 'This is a sample response' };
  }
}
