import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from 'src/repositories/user.repository';
import { PrismaUserRepositorys } from 'src/repositories/prisma/prisma.user.repository';
import { PrismaService } from 'src/database/prisma.client';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    PrismaService,
    { provide: UserRepository, useClass: PrismaUserRepositorys },
  ],
})
export class UserModule {}
