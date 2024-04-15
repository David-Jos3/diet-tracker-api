import { UpdateUserDto } from './../dtos/user.dto';
import { CreateUserDto } from 'src/dtos/user.dto';

export abstract class UserRepository {
  abstract createUserRepository(
    username: string,
    email: string,
    password: string,
  ): Promise<void>;
  abstract findByIdRepository(id: string): Promise<CreateUserDto[]>;
  abstract findByMetricsId(id: string): Promise<CreateUserDto[]>;
  abstract findAllRepository(): Promise<CreateUserDto[]>;
  abstract updateRepository(id: string, updateUserDto: UpdateUserDto);
  abstract deleteRepository(id: string): Promise<void>;
}
