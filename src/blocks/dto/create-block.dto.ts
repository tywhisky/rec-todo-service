import { ApiProperty } from '@nestjs/swagger';

export class CreateBlockDto {
  @ApiProperty()
  x: number;

  @ApiProperty()
  y: number;

  @ApiProperty()
  userId: string;
}
