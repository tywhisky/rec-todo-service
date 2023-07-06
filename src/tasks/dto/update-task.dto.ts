import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  deadline: Date;

  @ApiProperty()
  interval: number;

  @ApiProperty()
  last_completed_at: Date;

  @ApiProperty()
  blockId: string;
}
