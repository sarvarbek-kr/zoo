import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
    constructor(private readonly catService: CatService) {}

    //localhost:3000/cat
    @Get()
    public getHello(): string {
      return this.catService.getHello();
    }

 //localhost:3000/cat/greet
    @Get('greet')
    public introduce(): string {
      return this.catService.introduce();
    }
}
