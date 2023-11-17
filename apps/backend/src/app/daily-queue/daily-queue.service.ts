import { Injectable } from '@nestjs/common';
import { CreateUpdateDailyQueueDto } from './dto/create-update-daily-queue.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DailyQueue } from './entities/daily-queue.entity';

@Injectable()
export class DailyQueueService {
  constructor(
    @InjectRepository(DailyQueue)
    private visitorsRepository: Repository<DailyQueue>
  ) {}

  create(createUpdateDailyQueueDto: CreateUpdateDailyQueueDto) {
    return 'This action adds a new dailyQueue';
  }

  findAll() {
    return `This action returns all dailyQueue`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dailyQueue`;
  }

  update(id: number, createUpdateDailyQueueDto: CreateUpdateDailyQueueDto) {
    return `This action updates a #${id} dailyQueue`;
  }

  remove(id: number) {
    return `This action removes a #${id} dailyQueue`;
  }
}
