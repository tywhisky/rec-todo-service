import { Get, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }
}
