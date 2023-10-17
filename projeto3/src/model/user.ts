// DTO

import { IsNotEmpty, Length } from 'class-validator';

// instalar npm i class-validator class-transformer
export class UserDTO {
  @IsNotEmpty({
    message: 'Name is required',
  })
  name: string;
  email: string;
  @Length(4, 20, {
    message: 'Password should be between 4 and 20 characters',
  })
  password: string;
}
