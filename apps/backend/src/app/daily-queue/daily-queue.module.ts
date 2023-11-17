import { Module } from '@nestjs/common';
import { DailyQueueService } from './daily-queue.service';
import { DailyQueueController } from './daily-queue.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DailyQueue } from './entities/daily-queue.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DailyQueue])],
  controllers: [DailyQueueController],
  providers: [DailyQueueService],
})
export class DailyQueueModule {}
