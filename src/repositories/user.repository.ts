import { AuthPayloadDto } from 'src/dtos/auth.dto';
import { UpdateUserDto } from './../dtos/user.dto';
import { CreateUserDto } from 'src/dtos/user.dto';

export abstract class UserRepository {
  abstract createUserRepository(
    username: string,
    email: string,
    password: string,
  ): Promise<void>;
  abstract findByIdRepository(id: string): Promise<CreateUserDto[]>;
  abstract findByEmail(authLogin: AuthPayloadDto): Promise<AuthPayloadDto>;
  abstract findByMetricsId(id: string): Promise<CreateUserDto[]>;
  abstract findAllRepository(): Promise<CreateUserDto[]>;
  abstract updateRepository(
    id: string,
    updateUserDto: UpdateUserDto,
    passwordHash: string,
  );
  abstract deleteRepository(id: string): Promise<void>;
}
