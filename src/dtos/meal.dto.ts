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

  @IsDateString()
  updatedAt?: Date;

  @IsNotEmpty()
  withinTheDiet: boolean;
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
  createdAt?: Date;

  @IsOptional()
  @IsDateString()
  updatedAt?: Date;

  @IsOptional()
  withinTheDiet: boolean;
}
