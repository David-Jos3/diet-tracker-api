import { CreateUserDto } from 'src/dtos/user.dto';

export abstract class UserRepository {
  abstract create(
    username: string,
    email: string,
    password: string,
  ): Promise<void>;

  abstract findByIdRepository(id: string): Promise<CreateUserDto[]>;
}
