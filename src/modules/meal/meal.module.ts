import { Module } from '@nestjs/common';
import { MealService } from './meal.service';
import { MealController } from './meal.controller';
import { MealRepository } from 'src/repositories/meal.repository';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [MealController],
  providers: [MealService, { provide: MealRepository, useClass: PrismaClient }],
})
export class MealModule {}
