import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Put,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/dtos/user.dto';
import { UpdateUserDto } from 'src/dtos/user.dto';
import { Response } from 'express';
import { Public } from 'src/auth/constants/constants';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post('register')
  async create(@Body() body: CreateUserDto): Promise<void> {
    const { username, email, password } = body;
    await this.userService.createUserServices(username, email, password);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.userService.findByIdServices(id);
  }

  @Get()
  async findAll() {
    return await this.userService.findAllServices();
  }

  @Get('metrics/:id')
  async getMetricsUser(@Param('id') id: string) {
    return await this.userService.getUserMetric(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Res() res: Response,
  ): Promise<void> {
    try {
      await this.userService.updateServices(id, updateUserDto);
      res.status(HttpStatus.NO_CONTENT).send();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response): Promise<void> {
    try {
      await this.userService.deleteServices(id);
      res.status(HttpStatus.NO_CONTENT).send();
    } catch (error) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ messageError: 'Ocorreu um erro ao deletar o usuário.' });
      throw new Error(error.message);
    }
  }
}
