import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FruitsModule } from './modules/fruits/fruits.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db/fruits.db',
    entities: ["dist/**/**.entity{.ts,.js}"],
    synchronize: false
  }),
    FruitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
