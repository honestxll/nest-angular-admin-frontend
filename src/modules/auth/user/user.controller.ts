import { Controller, Post, Body, Put, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto, UpdatePasswordDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Post()
  async store(@Body() data: UserDto) {
    return await this.userService.store(data);
  }

  @Put(':id/password')
  async updatePassword(@Param('id') id: string, @Body() data: UpdatePasswordDto) {
    return await this.userService.updatePassword(id, data);
  }
}
