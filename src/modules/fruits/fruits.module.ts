import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Fruits } from 'src/database/entities/Fruits.entity';
import { FruitsController } from './fruits.controller';
import { FruitsService } from './fruits.service';

@Module({
  imports: [TypeOrmModule.forFeature([Fruits])],
  controllers: [FruitsController],
  providers: [FruitsService],
})
export class FruitsModule {}
