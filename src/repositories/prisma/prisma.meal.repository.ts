import { Injectable } from '@nestjs/common';
import { MealRepository } from '../meal.repository';
import { PrismaService } from 'src/database/prisma.client';
import { CreateMealDto, UpdateMealDto } from 'src/dtos/meal.dto';

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
  async findUserIdRepository(userId: string): Promise<CreateMealDto[]> {
    return await this.prisma.meal.findMany({
      where: { userId: userId },
    });
  }

  async updateRepository(
    id: string,
    updateMealDto: UpdateMealDto,
  ): Promise<void> {
    await this.prisma.meal.update({
      where: { id },
      data: { ...updateMealDto },
    });
  }

  async deleteRepository(id: string): Promise<void> {
    await this.prisma.meal.delete({
      where: { id },
    });
  }
}
