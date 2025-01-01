import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {
  getAll() {
    return 'this is from service getall quiz';
  }
}
