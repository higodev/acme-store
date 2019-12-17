import { Test, TestingModule } from '@nestjs/testing';
import { SalePaymentController } from './sale-payment.controller';

describe('SalePayment Controller', () => {
  let controller: SalePaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalePaymentController],
    }).compile();

    controller = module.get<SalePaymentController>(SalePaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
