import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Hash } from 'bcrypt';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createUserDto: CreateUserDto): Promise<void> {
        const hashedPwd = await Hash(
            createUserDto.password,
            process.env.SALT_ROUNDS,
        );

        const lowerEamil = createUserDto.email.toLowerCase();
        await this.prisma.user.create({
            data: {
                ...CreateUserDto,
                email: lowerEamil,
                password: hashedPwd,
            }
        }
    }
}
