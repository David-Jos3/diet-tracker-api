import { IsNotEmpty, IsEmail } from 'class-validator';

export class AuthPayloadDto {
  id: string;
  @IsNotEmpty()
  @IsNotEmpty()
  @IsEmail({}, { message: 'O email fornecido é inválido' })
  email: string;
  @IsNotEmpty()
  password: string;
}
