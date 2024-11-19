import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { DogService } from './dog.service';
import { Request, query } from 'express';

@Controller('dog')
export class DogController {
    constructor(private readonly dogService: DogService) {}

    //localhost:3000/cat
    @Get()
    public getHello(): string {
      return this.dogService.getHello();
    }

 //localhost:3000/cat/greet
    @Get('greet/:id')
    public introduce(@Param() params: any, @Query() query: any): string {
        console.log("params:", params);
        console.log("query:", query);
      return this.dogService.introduce();
    }
}
