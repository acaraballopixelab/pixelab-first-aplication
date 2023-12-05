import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
    ) {}

  @Get('')
  getHello(): string {
    // return 'hola mundo'
    return this.appService.getHello();
  }



  @Post('')
  getHelloPost(): string {
    return 'hola mundo desde post'
    // return this.appService.getHello();
  }

  
}
