import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
@ApiTags('App')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('HealthCheck')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('Exception')
  getException() {
    this.appService.getException();
  }
}