import { Test, TestingModule } from '@nestjs/testing';
import { SalePaymentService } from './sale-payment.service';

describe('SalePaymentService', () => {
  let service: SalePaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalePaymentService],
    }).compile();

    service = module.get<SalePaymentService>(SalePaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
