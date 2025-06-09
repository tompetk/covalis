import { Injectable } from '@nestjs/common';

@Injectable()
export class DatasetService {
  query(): string {
    return 'Hello World!';
  }
}
