import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDTO } from './model/user';
import { UserService } from './service/user.service';

@Controller('api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private userService: UserService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async addUser(@Body() user: UserDTO) {
    const u = await this.userService.createUser(user);
    return u;
  }

  @Get('users')
  async getUsers() {
    const users = await this.userService.getAllUsers();
    return users;
  }

  @Get('user/:id')
  async getUniqueUser(@Param('id') id: string) {
    const user = await this.userService.getUserById(id);
    return user;
  }
}
