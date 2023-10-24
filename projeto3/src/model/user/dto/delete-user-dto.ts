import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteUserDto {
  /**
   * Current password for delete confirmation
   * @date 23/10/2023 - 22:27:04
   *
   * @type {string}
   */
  @IsString()
  @IsNotEmpty()
  currentPwd: string;
}
