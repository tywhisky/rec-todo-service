import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  deadline: Date;

  @ApiProperty()
  interval: number;

  @ApiProperty()
  blockId: string;
}
