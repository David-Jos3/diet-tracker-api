import { UserRepository } from '../user.repository';
import { PrismaService } from 'src/database/prisma.client';
import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/dtos/user.dto';

@Injectable()
export class PrismaUserRepositorys implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async createUserRepository(
    username: string,
    email: string,
    password: string,
  ): Promise<void> {
    try {
      await this.prisma.user.create({
        data: { username, email, password },
      });
    } catch (erro) {
      throw new Error(erro);
    }
  }
  async findByIdRepository(id: string): Promise<CreateUserDto[]> {
    try {
      return await this.prisma.user.findMany({
        where: { id },
        include: { meal: true },
      });
    } catch (erro) {
      throw new Error(erro);
    }
  }

  async findAllRepository(): Promise<CreateUserDto[]> {
    try {
      return await this.prisma.user.findMany({ include: { meal: true } });
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateRepository(id: string, updateUserDto: UpdateUserDto) {
    try {
      await this.prisma.user.update({
        where: { id },
        data: { ...updateUserDto },
      });
    } catch (erro) {
      throw new Error(erro);
    }
  }

  async deleteRepository(id: string): Promise<void> {
    try {
      await this.prisma.user.delete({
        where: { id },
      });
    } catch (erro) {
      throw new Error(erro);
    }
  }
}
