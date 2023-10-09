import { Test, TestingModule } from '@nestjs/testing';
import { MessagingServiceService } from './messaging-service.service';

describe('MessagingServiceService', () => {
  let service: MessagingServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessagingServiceService],
    }).compile();

    service = module.get<MessagingServiceService>(MessagingServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
