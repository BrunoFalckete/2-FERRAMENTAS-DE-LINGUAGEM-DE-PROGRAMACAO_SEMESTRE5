import { Injectable } from '@nestjs/common';
import { UserService } from '../model/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService,
    private jwtService: JwtService
    ) {}

  async signIn(user1: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(user1);
    console.log(user);
    console.log(pass);
    //if (user?.password !== pass) {
    //  throw new UnauthorizedException();
    //}
    const payload = { sub: user.id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}