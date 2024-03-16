import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { MealService } from './meal.service';
import { CreateMealDto } from 'src/dtos/meal.dto';
@Controller('meal')
export class MealController {
  constructor(private readonly mealService: MealService) {}

  @Post()
  async create(@Body() body: CreateMealDto) {
    const { userId, name, description, isInDiet } = body;
    await this.mealService.createService(userId, name, description, isInDiet);
  }

  @Get(':userId')
  async findUserId(@Param('userId') userId: string): Promise<CreateMealDto> {
    console.log(userId);
    return this.mealService.findUserIdService(userId);
  }
}
