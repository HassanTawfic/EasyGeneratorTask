import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ description: 'Email for login', example: 'xyz@whatever.com' })
  @IsNotEmpty()
  @IsEmail({}, { message: 'please enter a correct email adress.' })
  email: string;

  @ApiProperty({
    description:
      'must have at least 1 character, 1 symbol, 1 number and its minimum length must be 8 characters',
    example: 'P@ssword123',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
