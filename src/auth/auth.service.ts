import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthPayloadDto } from 'src/dtos/auth.dto';
import { UserService } from 'src/modules/user/user.service';
import * as bcrypt from 'bcrypt';

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
    const isPassword = await bcrypt.compare(authLogin.password, user.password);
    if (!isPassword) {
      throw new Error('The password is incorrect');
    }
    return user;
  }
}
