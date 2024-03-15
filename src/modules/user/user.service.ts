import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}
  async createUser(username: string, email: string, password: string) {
    await this.userRepository.create(username, email, password);
  }

  async findAll() {
    return await this.userRepository;
  }
}
