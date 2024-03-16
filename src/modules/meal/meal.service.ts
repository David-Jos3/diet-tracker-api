import { Injectable } from '@nestjs/common';
import { MealRepository } from 'src/repositories/meal.repository';

@Injectable()
export class MealService {
  constructor(private mealRepository: MealRepository) {}
  async createService(
    userId: string,
    name: string,
    description: string,
    isInDiet: boolean,
  ) {
    await this.mealRepository.create(userId, name, description, isInDiet);
  }

  async findUserIdService(userId: string) {
    return this.mealRepository.findUserIdRepository(userId);
  }
}
