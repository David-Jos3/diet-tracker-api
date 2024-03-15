import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/dtos/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async create(
    @Body() { username, email, password }: CreateUserDto,
  ): Promise<void> {
    await this.userService.createUser(username, email, password);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.userService.findByIdServices(id);
  }
}
