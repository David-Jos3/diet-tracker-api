import { UserRepository } from '../user.repository';
import { PrismaService } from 'src/database/prisma.client';
import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/dtos/user.dto';
import { AuthPayloadDto } from 'src/dtos/auth.dto';

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

  async findByEmail(authLogin: AuthPayloadDto): Promise<AuthPayloadDto> {
    try {
      const user = await this.prisma.user.findFirst({
        where: { email: authLogin.email },
      });
      return user;
    } catch (error) {
      console.error(error);
      throw new Error(
        'An error occurred when searching for the user by email.',
      );
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

  async findByMetricsId(id: string): Promise<CreateUserDto[]> {
    try {
      return await this.prisma.user.findMany({
        where: { id },
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

  async updateRepository(
    id: string,
    updateUserDto: UpdateUserDto,
    passwordHash: string,
  ) {
    try {
      await this.prisma.user.update({
        where: { id },
        data: { ...updateUserDto, password: passwordHash },
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
