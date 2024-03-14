import { UserRepository } from '../user.repository';
import { PrismaService } from 'src/database/prisma.client';
import { Injectable } from '@nestjs/common';

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
}