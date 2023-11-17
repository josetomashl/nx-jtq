import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DailyQueueService } from './daily-queue.service';
import { CreateUpdateDailyQueueDto } from './dto/create-update-daily-queue.dto';

@Controller('daily-queue')
export class DailyQueueController {
  constructor(private readonly dailyQueueService: DailyQueueService) {}

  @Post()
  create(@Body() createUpdateDailyQueueDto: CreateUpdateDailyQueueDto) {
    return this.dailyQueueService.create(createUpdateDailyQueueDto);
  }

  @Get()
  findAll() {
    return this.dailyQueueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dailyQueueService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() createUpdateDailyQueueDto: CreateUpdateDailyQueueDto
  ) {
    return this.dailyQueueService.update(+id, createUpdateDailyQueueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dailyQueueService.remove(+id);
  }
}
