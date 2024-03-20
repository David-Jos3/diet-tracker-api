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

  @Get(':userId')
  async findUserId(@Param('userId') userId: string): Promise<CreateMealDto[]> {
    return await this.mealService.findUserIdService(userId);
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
