import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { MealService } from './meal.service';
import { CreateMealDto, UpdateMealDto } from 'src/dtos/meal.dto';

@Controller('meal')
export class MealController {
  constructor(private readonly mealService: MealService) {}

  @Post()
  async create(@Body() body: CreateMealDto) {
    const { userId, name, description, isInDiet } = body;
    await this.mealService.createService(userId, name, description, isInDiet);
  }

  @Get(':userId/total')
  async getUserMetrics(@Param('userId') userId: string) {
    return await this.mealService.getMealMetricsTotal(userId);
  }

  @Get(':userId/diet/total')
  async getUserDietTotal(@Param('userId') userId: string) {
    return await this.mealService.getMealMetricsDiet(userId);
  }

  @Get(':userId/non-diet/total')
  async getUserNonDietTotal(@Param('userId') userId: string) {
    return await this.mealService.getMealMetricsNonDiet(userId);
  }

  @Get(':userId')
  async findUserId(@Param('userId') userId: string): Promise<CreateMealDto[]> {
    return await this.mealService.findUserIdService(userId);
  }

  @Get('mealId/:id')
  async findById(@Param('id') id: string): Promise<CreateMealDto> {
    return await this.mealService.findByIdMeal(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMealDto: UpdateMealDto,
  ): Promise<void> {
    await this.mealService.updateService(id, updateMealDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.mealService.deleteService(id);
  }
}
