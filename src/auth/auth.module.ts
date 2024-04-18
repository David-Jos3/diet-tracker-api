import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/modules/user/user.module';
import { UserService } from 'src/modules/user/user.service';
import { UserRepository } from 'src/repositories/user.repository';
import { PrismaUserRepositorys } from 'src/repositories/prisma/prisma.user.repository';
import { PrismaService } from 'src/database/prisma.client';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserService,
    PrismaService,
    { provide: UserRepository, useClass: PrismaUserRepositorys },
  ],
})
export class AuthModule {}
