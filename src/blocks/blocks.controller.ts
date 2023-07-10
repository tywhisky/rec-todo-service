import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Post,
  UseGuards,
  Request,
  Delete
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
  findAll(@Request() req) {
    return this.blocksService.findAll(req.user.id);
  }

  @Post()
  @ApiCreatedResponse({ type: BlockEntity })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  create(@Request() req, @Body() createBlockDto: CreateBlockDto) {
    createBlockDto.userId = req.user.id
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

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  delete(@Param('id') id: string) {
    return this.blocksService.delete(id);
  }
}
