import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { JwtAuthGuard } from '@/auth/auth.guard';

@Controller()
@ApiTags('App')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  index() {
      return 'Protected';
  }

  @Get('HealthCheck')
  healthCheck(): string {
    return this.appService.getHello();
  }

  @Get('Exception')
  exception() {
    this.appService.getException();
  }
}
