import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserDTO } from 'src/model/user';
import { IUserRepository } from 'src/repositories/user.repository';

@Injectable()
export class UserService implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  createUser(user: UserDTO): Promise<UserDTO> {
    const u = this.prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: user.password,
      },
    });
    return u;
  }
  getUserById(id: string): Promise<UserDTO> {
    const user = this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return user;
  }
  getAllUsers(): Promise<UserDTO[]> {
    const users = this.prisma.user.findMany();
    return users;
  }
}
