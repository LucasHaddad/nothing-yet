import { BadRequestException, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  
  getHello(): string {
    this.logger.log('Called');
    return 'Hello World!';
  }
  
  getException() {
    throw new BadRequestException('Tested');
  }
}
