import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { DatasetService } from './services/dataset.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [DatasetService],
})
export class AppModule {}
