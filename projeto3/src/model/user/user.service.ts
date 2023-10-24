import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from './dto/create-user-dto';
import { hash, compare } from 'bcrypt';
import { UserDTO } from '../user';
import { DeleteUserDto } from './dto/delete-user-dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<void> {
    try {
      const hashedPwd = await hash(createUserDto.password, 10);

      const lowerEmail = createUserDto.email.toLowerCase();
      await this.prisma.user.create({
        data: {
          ...createUserDto,
          role: 'USER',
          email: lowerEmail,
          password: hashedPwd,
        },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async findAll(): Promise<UserDTO[]> {
    const users = await this.prisma.user.findMany();
    users.forEach((user) => delete user.password);
    return users;
  }

  async findByEmail(email: string): Promise<UserDTO> {
    const lowerEmail = email.toLowerCase();
    const user = await this.prisma.user.findUnique({
      where: { email: lowerEmail },
    });
    delete user.password;
    return user;
  }

  async update(id: string, userDto: UserDTO) {
    const user = await this.prisma.user.update({
      where: { id },
      data: { ...userDto, updatedAt: new Date() },
    });
    delete user.password;
    return user;
  }

  async delete(id: string, pwd: DeleteUserDto) {
    //validar senha pa deletar
    await this.validatePwd(id, pwd.currentPwd);

    return await this.prisma.user.delete({ where: { id } });
  }

  private async validatePwd(id: string, currentPwd: string): Promise<void> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    const isCorrectPwd = await compare(currentPwd, (await user).password);

    if (!isCorrectPwd) {
      //exeption
      console.log('pwd is incorrect!');
    }
  }
}
