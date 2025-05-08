import { AuthGuard } from './guards/auth.guard';
import {
  Body,
  Controller,
  Get,
  Logger,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { ApiBasicAuth, ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  private logger = new Logger('AuthController');
  constructor(private authService: AuthService) {}
  @ApiOperation({ summary: 'used to create a new user' })
  @Post('signup')
  async signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
    this.logger.verbose(`a new email has signed up ${signUpDto.email}`, true);
    return this.authService.signUp(signUpDto);
  }
  @ApiOperation({ summary: 'used to login an exsting user' })
  @Post('login')
  login(@Body() LoginDto: LoginDto): Promise<{ token: string }> {
    this.logger.verbose(`an email has signed in ${LoginDto.email}`, true);
    return this.authService.login(LoginDto);
  }

  @ApiOperation({ summary: 'gets user profile, requires a valid token' })
  @UseGuards(AuthGuard)
  @Get('profile')
  testLogin(@Req() req): any {
    return { message: 'Accessed Resource', userId: req.userId };
  }
}
