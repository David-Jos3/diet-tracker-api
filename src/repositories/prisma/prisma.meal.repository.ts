import { MealRepository } from '../meal.repository';
import { PrismaService } from 'src/database/prisma.client';
import { CreateMealDto } from 'src/dtos/meal.dto';

export class PrismaMealRepository implements MealRepository {
  constructor(private prisma: PrismaService) {}
  async create(
    userId: string,
    name: string,
    description: string,
    withinTheDiet: boolean,
  ): Promise<void> {
    await this.prisma.meal.create({
      data: { userId, name, description, withinTheDiet },
    });
  }
  async findUserIdRepository(userId: string): Promise<CreateMealDto> {
    return await this.prisma.meal.findUnique({
      where: { id: userId },
    });
  }
}
