import { Injectable } from '@nestjs/common';
//test s
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
