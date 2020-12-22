import { Injectable } from '@nestjs/common';
import { Fruits } from 'src/database/entities/Fruits.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FruitsService {
    constructor(
        @Injectable(Fruits)
        private fruitsRepository: Repository<Fruits>
    ) { }

        findAll(): Promise<Fruits[]> {
            return this.fruitsRepository.find();
        }


}
