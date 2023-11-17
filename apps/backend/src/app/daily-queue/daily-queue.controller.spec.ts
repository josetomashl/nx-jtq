import { Test, TestingModule } from '@nestjs/testing';
import { DailyQueueController } from './daily-queue.controller';
import { DailyQueueService } from './daily-queue.service';

describe('DailyQueueController', () => {
  let controller: DailyQueueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyQueueController],
      providers: [DailyQueueService],
    }).compile();

    controller = module.get<DailyQueueController>(DailyQueueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
