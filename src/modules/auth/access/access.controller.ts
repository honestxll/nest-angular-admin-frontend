import { Controller, Post, Body } from '@nestjs/common';
import { AccessDto } from './access.dto';
import { AccessService } from './access.service';

@Controller('access')
export class AccessController {
  constructor(private accessService: AccessService) { }
  @Post()
  async store(@Body() data: AccessDto) {
    return await this.accessService.store(data);
  }
}
