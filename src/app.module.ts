import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { MealModule } from './modules/meal/meal.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, MealModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
