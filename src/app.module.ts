import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { MealModule } from './modules/meal/meal.module';

@Module({
  imports: [UserModule, MealModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
