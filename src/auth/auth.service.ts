import bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthPayloadDto } from 'src/dtos/auth.dto';
import { UserService } from 'src/modules/user/user.service';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async signIn(authLogin: AuthPayloadDto) {
    const user = await this.userService.findOne(authLogin);
    if (!user) {
      throw new Error('User not found');
    }
    console.log(authLogin.password, user.password);
    const isPassword = await bcrypt.compare(authLogin.password, user.password);
    if (isPassword) {
      console.log('A senha está correta');
    } else {
      console.log('Deu merda na tua senha ai bicho');
    }
    return user;
  }
}
