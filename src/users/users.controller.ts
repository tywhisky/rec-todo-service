import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ type: UserEntity })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  @ApiOkResponse({ type: UserEntity })
  @ApiCreatedResponse({ type: UserEntity })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: UserEntity })
  @ApiCreatedResponse({ type: UserEntity })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }
}
