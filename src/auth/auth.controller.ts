import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authPayloadDto } from 'src/dtos/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() authPayload: authPayloadDto) {
    console.log(authPayload);
    return await this.authService.signIn(authPayload);
  }
}
