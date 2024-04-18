import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { authPayloadDto } from 'src/dtos/auth.dto';
import { UserService } from 'src/modules/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async signIn(authLongin: authPayloadDto) {
    //
  }
}
