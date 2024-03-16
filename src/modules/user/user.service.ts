import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/dtos/user.dto';
import { UserRepository } from 'src/repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUserServices(
    username: string,
    email: string,
    password: string,
  ): Promise<void> {
    await this.userRepository.createUserRepository(username, email, password);
  }

  async findByIdServices(id: string): Promise<CreateUserDto[]> {
    return await this.userRepository.findByIdRepository(id);
  }

  async findAllServices(): Promise<CreateUserDto[]> {
    return await this.userRepository.findAllRepository();
  }

  async updateServices(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<void> {
    return await this.userRepository.updateRepository(id, updateUserDto);
  }

  async deleteServices(id: string): Promise<void> {
    await this.userRepository.deleteRepository(id);
  }
}
