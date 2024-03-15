import { createUserDto } from 'src/dtos/user.dto';

export abstract class UserRepository {
  abstract create(
    username: string,
    email: string,
    password: string,
  ): Promise<void>;

  abstract findAll(): Promise<createUserDto[]>;
}
