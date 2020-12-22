import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fruits } from 'src/database/entities/Fruits.entity';
import { Repository } from 'typeorm';
import { CreateFruitsDto } from './dtos/create-fruits.dtos';
import { UpdateFruitsDto } from './dtos/update-fruits.dto';

@Injectable()
export class FruitsService {
    constructor(
        @InjectRepository(Fruits)
        private fruitsRepository: Repository<Fruits>
    ) { }

        findAll(): Promise<Fruits[]> {
            return this.fruitsRepository.find();
        }

        findById(id: string): Promise<Fruits> {
            return this.fruitsRepository.findOne(id);
        }

        create(dto: CreateFruitsDto){
            this.fruitsRepository.insert({Name: dto.name, PictureUrl: dto.PictureUrl});
        }

        update(id: string, dto: UpdateFruitsDto) {
            this.fruitsRepository.update(id, { Name: dto.name, PictureUrl: dto.PictureUrl });
        }
    
        delete(id: string) {
            this.fruitsRepository.delete(id);
        }
}
