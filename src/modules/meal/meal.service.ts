import { Injectable } from '@nestjs/common';
import { UpdateMealDto } from 'src/dtos/meal.dto';
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
    return await this.mealRepository.findUserIdRepository(userId);
  }

  async getMealMetricsTotal(userId: string) {
    const meal = await this.mealRepository.findUserIdRepository(userId);
    if (!meal) {
      throw new Error('Erro ao busca total de Dieta');
    }
    const totalDiet = meal.length;
    return { totalDiet };
  }
  async getMealMetricsDiet(userId: string) {
    const meal = await this.mealRepository.findUserIdRepository(userId);
    if (!meal) {
      throw new Error('Erro ao buscar as Refeições dentro da dieta');
    }
    const totalInDiet = meal.filter((diet) => diet.isInDiet);

    return { withinTheDiet: totalInDiet.length };
  }
  async getMealMetricsNonDiet(userId: string) {
    const meal = await this.mealRepository.findUserIdRepository(userId);
    if (!meal) {
      throw new Error('Erro ao buscar as Refeições fora da dieta');
    }
    const totalInDiet = meal.filter((diet) => !diet.isInDiet);

    return { withinTheDiet: totalInDiet.length };
  }

  async getBestSequenceDiet(userId: string) {
    const meals = await this.mealRepository.findUserIdRepository(userId);
    const insideDiet = meals.filter((meal) => meal.isInDiet);
    let totalTimeOnTheDiet = 0;
    insideDiet.forEach((meal) => {
      const createdAt = new Date(meal.createAt).getTime();
      const updatedAt = new Date(meal.updatedAt).getTime();
      const diffInMS = updatedAt - createdAt;
      const diffInMinutes = diffInMS / (1000 * 60);
      totalTimeOnTheDiet += diffInMinutes;
    });

    const days = Math.floor(totalTimeOnTheDiet / (60 * 24));
    const remainingHours = Math.round((totalTimeOnTheDiet % (60 * 24)) / 60);

    return {
      BestSequenceDietInMinutes: totalTimeOnTheDiet.toFixed(2),
      BestSequenceDietInDays: days,
      BestSequenceDietInHours: remainingHours,
    };
  }

  async findByIdMeal(id: string) {
    return await this.mealRepository.findByIdMealRepository(id);
  }

  async updateService(id: string, updateMealDto: UpdateMealDto): Promise<void> {
    await this.mealRepository.updateRepository(id, updateMealDto);
  }

  async deleteService(id: string) {
    await this.mealRepository.deleteRepository(id);
  }
}
