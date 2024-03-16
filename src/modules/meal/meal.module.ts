import { PrismaService } from 'src/database/prisma.client';
import { PrismaMealRepository } from './../../repositories/prisma/prisma.meal.repository';
import { Module } from '@nestjs/common';
import { MealService } from './meal.service';
import { MealController } from './meal.controller';
import { MealRepository } from 'src/repositories/meal.repository';

@Module({
  controllers: [MealController],

  providers: [
    MealService,
    PrismaService,
    { provide: MealRepository, useClass: PrismaMealRepository },
  ],
})
export class MealModule {}
