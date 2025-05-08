import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class SignUpDto {
  @ApiPropertyOptional()
  @IsOptional()
  name: string;

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
  @MinLength(8)
  @Matches(/[A-Za-z]/, { message: 'Password must contain at least one letter' })
  @Matches(/[0-9]/, { message: 'Password must contain at least one number' })
  @Matches(/[^A-Za-z0-9]/, {
    message: 'Password must contain at least one symbol',
  })
  password: string;
}
