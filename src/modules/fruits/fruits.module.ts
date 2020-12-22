import { Module } from '@nestjs/common';
import { FruitsController } from './fruits.controller';

@Module({
  controllers: [FruitsController],
})
export class FruitsModule {}
