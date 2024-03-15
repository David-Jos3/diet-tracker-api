import {
  IsEmail,
  IsNotEmpty,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
export class createUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'O email fornecido é inválido' })
  email: string;

  @IsNotEmpty()
  @MinLength(8, { message: 'A senha deve ter pelo menos 8 caracteres' })
  @MaxLength(20, { message: 'A senha não pode ter mais de 20 caracteres ' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message:
      'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número',
  })
  password: string;
}
