import { IsDateString, IsNotEmpty, IsOptional } from 'class-validator';
export class CreateMealDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsDateString()
  createAt: Date;

  @IsDateString()
  updatedAt: Date;

  @IsNotEmpty()
  withinTheDiet: boolean;

  @IsNotEmpty()
  userId: string;
}

export class UpdateMealDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  @IsDateString()
  createdAt?: Date;

  @IsOptional()
  @IsDateString()
  updatedAt: Date;

  @IsOptional()
  withinTheDiet?: boolean;

  @IsOptional()
  userId?: string;
}
