import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Questions } from './questions.entity';
import { Repository } from 'typeorm';
import { CreateQuestionsDto } from './dto/create-questions.dto';
import { Quiz } from 'src/quiz/quiz.entity';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Questions)
    private questionsRepository: Repository<Questions>,
  ) {}
  getAllQuestions() {
    return 'This is a questions api testing!';
  }

  async createQuestion(
    questionsData: CreateQuestionsDto,
    quiz: Quiz,
  ): Promise<Questions> {
    const newQuestion = this.questionsRepository.create({//this will create new instance in memory
        //this maps provided data 
      ...questionsData,
      quiz,
    });
    return await this.questionsRepository.save(newQuestion); // Save the Question
  }
}
