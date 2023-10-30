import {
  IsEmail,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { User } from '../entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Description placeholder
 * @date 16/10/2023 - 21:30:50
 *
 * @export
 * @class CreateUserDto
 * @typedef {CreateUserDto}
 */
export class CreateUserDto implements User {
  /**
   * Description placeholder
   * @date 16/10/2023 - 21:30:50
   *
   * @type {string}
   */
  @IsEmail()

  @ApiProperty({
    example: 'example@example.com'
  })

  email: string;
  /**
   * Description placeholder
   * @date 16/10/2023 - 21:30:50
   *
   * @type {string}
   */
  @IsStrongPassword()

  @ApiProperty({
    example: 'kqPcqSy46Dg8*'
  })

  password: string;
  /**
   * Description placeholder
   * @date 16/10/2023 - 21:30:50
   *
   * @type {?string}
   */
  @IsString()
  @IsOptional()

  @ApiProperty({
    example: 'Bruno Lindao'
  })

  name?: string;

  /**
   * Description placeholder
   * @date 16/10/2023 - 21:30:50
   *
   * @type {?string}
   */
  @IsString()
  @IsOptional()

  @ApiProperty({
    example: 'Rua Angico 140'
  })

  address?: string;
}
