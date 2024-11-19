import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public getHello(): string {
    return 'Hello World!';
  }

  public getdetail(): string {
    return " here are zoo details!";
  }
}
