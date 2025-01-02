import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from './dto/create-quiz.dto/create-quiz.dto';
import { Quiz } from './quiz.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private quizRepository: Repository<Quiz>, //this is known as repository injection - this allows databse operations like save,find
  ) {}
  getAll() {
    return 'this is from service getall quiz';
  }

  async getQuizById(id: number):Promise<Quiz> {
    return await this.quizRepository.findOneBy({ idQuizes: id });
  }

  async createNewQuiz(quiz: CreateQuizDto): Promise<Quiz> {
    //method will return a Promise type of Quiz thats why we added this part to feel asynchronas structure
    console.log('Data in service:', quiz); // Log incoming data

    return await this.quizRepository.save(quiz); // Save the mapped entity
  }
}
//This is the code which enables to enter application logic
