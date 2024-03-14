import { Body, Controller, Post, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDto } from 'src/dtos/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async create(
    @Body() { username, email, password }: createUserDto,
  ): Promise<void> {
    await this.userService.createUser(username, email, password);
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }
}
