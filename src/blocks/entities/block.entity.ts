import { Block } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class BlockEntity implements Block {
  userId: string;
  @ApiProperty()
  id: string;
  @ApiProperty()
  x: number;
  @ApiProperty()
  y: number;
  inserted_at: Date;
  updated_at: Date;
}
