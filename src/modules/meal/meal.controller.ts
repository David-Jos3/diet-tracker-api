import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { MealService } from './meal.service';
import { CreateMealDto } from 'src/dtos/meal.dto';
@Controller('meal')
export class MealController {
  constructor(private readonly mealService: MealService) {}

  @Post()
  async create(
    @Body() { userId, name, description, withinTheDiet }: CreateMealDto,
  ) {
    await this.mealService.createService(
      userId,
      name,
      description,
      withinTheDiet,
    );
  }

  @Get(':userId')
  async findUserId(@Param('userId') userId: string): Promise<CreateMealDto> {
    return this.mealService.findUserIdService(userId);
  }
}
