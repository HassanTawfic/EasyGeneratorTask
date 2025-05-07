import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'please enter a correct email adress.' })
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
