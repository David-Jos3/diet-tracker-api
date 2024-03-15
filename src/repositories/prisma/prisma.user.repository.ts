import { UserRepository } from '../user.repository';
import { PrismaService } from 'src/database/prisma.client';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/user.dto';

@Injectable()
export class PrismaUserRepositorys implements UserRepository {
  constructor(private prisma: PrismaService) {}
  async create(
    username: string,
    email: string,
    password: string,
  ): Promise<void> {
    await this.prisma.user.create({
      data: { username, email, password },
    });
  }
  async findByIdRepository(id: string): Promise<CreateUserDto[]> {
    try {
      return await this.prisma.user.findMany({
        where: { id },
      });
    } catch (erro) {
      throw new Error(erro);
    }
  }
}
