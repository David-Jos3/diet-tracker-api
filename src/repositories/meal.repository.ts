import { CreateMealDto } from 'src/dtos/meal.dto';

export abstract class MealRepository {
  abstract create(
    userId: string,
    name: string,
    description: string,
    withinTheDiet: boolean,
  ): Promise<void>;

  abstract findUserIdRepository(userId: string): Promise<CreateMealDto>;
}