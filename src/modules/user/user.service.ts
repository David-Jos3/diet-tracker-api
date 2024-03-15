import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/user.dto';
import { UserRepository } from 'src/repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}
  async createUser(username: string, email: string, password: string) {
    await this.userRepository.create(username, email, password);
  }

  async findByIdServices(id: string): Promise<CreateUserDto[]> {
    return await this.userRepository.findByIdRepository(id);
  }
}
