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

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('sign-up')
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
        .json({ messageError: 'Ocorreu um erro ao excluir o usuário.' });
      throw new Error(error.message);
    }
  }
}
