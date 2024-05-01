import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { MealModule } from './modules/meal/meal.module';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [UserModule, MealModule, AuthModule],
  controllers: [],
  providers: [{ provide: APP_GUARD, useClass: AuthGuard }],
})
export class AppModule {}
