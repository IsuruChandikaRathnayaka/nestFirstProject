import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionsDto } from './dto/create-questions.dto';
import { Questions } from './questions.entity';
import { QuizService } from 'src/quiz/quiz.service';

@Controller('questions')
export class QuestionsController {
  constructor(
    private questionsDbService: QuestionsService,
    private quizDbService: QuizService,
  ) {}
  @Get('/')
  getAllQuestions() {
    return this.questionsDbService.getAllQuestions();
  }

  @Post('/')
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async createQuestion(
    @Body() questiondata: CreateQuestionsDto,
  ): Promise<Questions> {
    const quiz = await this.quizDbService.getQuizById(
      questiondata.quizIdQuizes,
    );

    console.log('questions controller quize returned : ', quiz);
    console.log('This is how questions data is comming : ', questiondata);

    return await this.questionsDbService.createQuestion(questiondata, quiz);
  }
}
