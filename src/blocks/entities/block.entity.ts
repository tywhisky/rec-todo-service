import { Block } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { TaskEntity } from 'src/tasks/entities/task.entity';

export class BlockEntity implements Block {
  userId: string;
  @ApiProperty()
  id: string;
  @ApiProperty()
  x: number;
  @ApiProperty()
  y: number;
  @ApiProperty()
  tasks: TaskEntity[];
  inserted_at: Date;
  updated_at: Date;
}
