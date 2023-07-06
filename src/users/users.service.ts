import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) { }

    async findAll(): Promise<User[]> {
        return await this.prisma.user.findMany();
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const { email, password } = createUserDto;
        return await this.prisma.user.create({
            data: {
                email,
                password,
            },
        });
    }
}
