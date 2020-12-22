import { Controller, Get } from '@nestjs/common';

@Controller('fruits')
export class FruitsController {
    @Get()
    findAll(): string {
        return "Listando Frutas";
    }
}
