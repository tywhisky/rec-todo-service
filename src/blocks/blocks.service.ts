import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';

@Injectable()
export class BlocksService {
  constructor(private prisma: PrismaService) {}

  findAll(userId: string) {
    return this.prisma.block.findMany({ where: { userId: userId } });
  }

  create(createBlockDto: CreateBlockDto) {
    return this.prisma.block.create({ data: createBlockDto });
  }

  update(id: string, updateBlockDto: UpdateBlockDto) {
    return this.prisma.block.update({
      where: { id },
      data: updateBlockDto,
    });
  }
}
