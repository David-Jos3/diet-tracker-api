import { IsDateString, IsNotEmpty, IsOptional } from 'class-validator';
export class CreateMealDto {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsDateString()
  createAt?: Date;

  @IsNotEmpty()
  isInDiet: boolean;
}

export class UpdateMealDto {
  @IsOptional()
  userId?: string;

  @IsOptional()
  name?: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  @IsDateString()
  updatedAt?: Date;

  @IsOptional()
  isInDiet: boolean;
}
