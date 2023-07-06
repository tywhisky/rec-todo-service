import { Task } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class TaskEntity implements Task {
  @ApiProperty()
  id: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  interval: number;
  @ApiProperty()
  deadline: Date;
  @ApiProperty()
  last_completed_at: Date;
  blockId: string;
  userId: string;
  inserted_at: Date;
  updated_at: Date;
}
