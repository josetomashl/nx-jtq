import { Test, TestingModule } from '@nestjs/testing';
import { DailyQueueService } from './daily-queue.service';

describe('DailyQueueService', () => {
  let service: DailyQueueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyQueueService],
    }).compile();

    service = module.get<DailyQueueService>(DailyQueueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
