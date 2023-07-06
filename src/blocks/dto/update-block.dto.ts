import { ApiProperty } from '@nestjs/swagger';

export class UpdateBlockDto {
  @ApiProperty()
  x: number;

  @ApiProperty()
  y: number;
}
