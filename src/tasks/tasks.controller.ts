import {
  Controller,
  Body,
  Patch,
  Param,
  Post,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { UpdateTaskDto } from './dto/update-task.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TaskEntity } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('tasks')
@ApiTags('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiCreatedResponse({ type: TaskEntity })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Patch(':id')
  @ApiOkResponse({ type: TaskEntity })
  @ApiCreatedResponse({ type: TaskEntity })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: TaskEntity })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
