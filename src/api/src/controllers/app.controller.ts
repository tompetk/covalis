import { Controller, Get } from '@nestjs/common';
import { DatasetService } from '../services/dataset.service';

@Controller()
export class AppController {
  constructor(private readonly appService: DatasetService) {}

  @Get()
  getHello(): string {
    return this.appService.query();
  }
}
