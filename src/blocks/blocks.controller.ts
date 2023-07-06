import { Controller, Get, Body, Patch, Param, Post } from '@nestjs/common';
import { BlocksService } from './blocks.service';
import { UpdateBlockDto } from './dto/update-block.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BlockEntity } from './entities/block.entity';
import { CreateBlockDto } from './dto/create-block.dto';

@Controller('blocks')
@ApiTags('blocks')
export class BlocksController {
  constructor(private readonly blocksService: BlocksService) {}

  @Get()
  @ApiOkResponse({ type: BlockEntity, isArray: true })
  findAll(@Param('userId') userId: string) {
    return this.blocksService.findAll(userId);
  }

  @Post()
  @ApiCreatedResponse({ type: BlockEntity })
  create(@Body() createBlockDto: CreateBlockDto) {
    return this.blocksService.create(createBlockDto);
  }

  @Patch(':id')
  @ApiOkResponse({ type: BlockEntity })
  @ApiCreatedResponse({ type: BlockEntity })
  update(@Param('id') id: string, @Body() updateBlockDto: UpdateBlockDto) {
    return this.blocksService.update(id, updateBlockDto);
  }
}
