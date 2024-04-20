import { AuthPayloadDto } from 'src/dtos/auth.dto';
import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/dtos/user.dto';
import { UserRepository } from 'src/repositories/user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUserServices(
    username: string,
    email: string,
    password: string,
  ): Promise<void> {
    const passwordHash = await bcrypt.hash(password, 10);
    await this.userRepository.createUserRepository(
      username,
      email,
      passwordHash,
    );
  }

  async findOne(login: AuthPayloadDto) {
    const user = await this.userRepository.findByEmail(login);
    console.log(user);
    return user;
  }

  async findByIdServices(id: string): Promise<CreateUserDto[]> {
    return await this.userRepository.findByIdRepository(id);
  }

  async getUserMetric(id: string) {
    const user = await this.userRepository.findByIdRepository(id);

    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    const totalMeal = user[0].meal.length;
    return { totalMeal };
  }

  async getUserMetricDiet(id: string) {
    const user = await this.userRepository.findByIdRepository(id);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const totalMeal = user[0].meal;

    const dietMealsTotal = totalMeal.filter((meal) => meal.isInDiet).length;
    return { dietMealsTotal };
  }

  async getUserMetricNonDiet(id: string) {
    const user = await this.userRepository.findByIdRepository(id);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    const totalMeal = user[0].meal;
    const nonDietMealsTotal = totalMeal.filter((meal) => !meal.isInDiet).length;
    return { nonDietMealsTotal };
  }

  async findAllServices(): Promise<CreateUserDto[]> {
    return await this.userRepository.findAllRepository();
  }

  async updateServices(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<void> {
    const passwordHash = await bcrypt.hash(updateUserDto.password, 10);
    return await this.userRepository.updateRepository(
      id,
      updateUserDto,
      passwordHash,
    );
  }

  async deleteServices(id: string): Promise<void> {
    await this.userRepository.deleteRepository(id);
  }
}
