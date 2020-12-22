import { Body, Controller, Delete, Get, Param, Post, Put  } from '@nestjs/common';
import { Fruits } from 'src/database/entities/Fruits.entity';
import { CreateFruitsDto } from './dtos/create-fruits.dtos';
import { UpdateFruitsDto } from './dtos/update-fruits.dto';
import { FruitsService } from './fruits.service';

@Controller('fruits')
export class FruitsController {
    constructor(
        private readonly fruitsService: FruitsService
    ) { }

    @Get()
    findAll(): Promise<Fruits[]> {
        return this.fruitsService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string): Promise<Fruits> {
        return this.fruitsService.findById(id);
    }

    @Post()
    create(@Body() dto: CreateFruitsDto) {
        this.fruitsService.create(dto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateFruitsDto) {
        this.fruitsService.update(id, dto);
    }

    @Delete(':id') 
    delete(@Param('id') id: string) {
        this.fruitsService.delete(id);
    }
}
