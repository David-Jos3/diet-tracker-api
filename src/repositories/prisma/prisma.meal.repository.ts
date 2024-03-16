import { Injectable } from '@nestjs/common';
import { MealRepository } from '../meal.repository';
import { PrismaService } from 'src/database/prisma.client';
import { CreateMealDto } from 'src/dtos/meal.dto';

@Injectable()
export class PrismaMealRepository implements MealRepository {
  constructor(private prisma: PrismaService) {}
  async create(
    userId: string,
    name: string,
    description: string,
    isInDiet: boolean,
  ): Promise<void> {
    await this.prisma.meal.create({
      data: { userId, name, description, isInDiet },
    });
  }
  async findUserIdRepository(userId: string): Promise<CreateMealDto> {
    return await this.prisma.meal.findFirst({
      where: { userId: userId },
    });
  }
}
