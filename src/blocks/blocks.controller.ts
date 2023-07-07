import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { BlocksService } from './blocks.service';
import { UpdateBlockDto } from './dto/update-block.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BlockEntity } from './entities/block.entity';
import { CreateBlockDto } from './dto/create-block.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('blocks')
@ApiTags('blocks')
export class BlocksController {
  constructor(private readonly blocksService: BlocksService) {}

  @Get()
  @ApiOkResponse({ type: BlockEntity, isArray: true })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  findAll(@Param('userId') userId: string) {
    return this.blocksService.findAll(userId);
  }

  @Post()
  @ApiCreatedResponse({ type: BlockEntity })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  create(@Body() createBlockDto: CreateBlockDto) {
    return this.blocksService.create(createBlockDto);
  }

  @Patch(':id')
  @ApiOkResponse({ type: BlockEntity })
  @ApiCreatedResponse({ type: BlockEntity })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateBlockDto: UpdateBlockDto) {
    return this.blocksService.update(id, updateBlockDto);
  }
}
