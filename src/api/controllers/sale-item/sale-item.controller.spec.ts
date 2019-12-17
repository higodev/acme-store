import { Test, TestingModule } from '@nestjs/testing';
import { SaleItemController } from './sale-item.controller';

describe('SaleItem Controller', () => {
  let controller: SaleItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaleItemController],
    }).compile();

    controller = module.get<SaleItemController>(SaleItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
