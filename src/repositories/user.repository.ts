export abstract class UserRepository {
  abstract create(
    username: string,
    email: string,
    password: string,
  ): Promise<void>;
}
