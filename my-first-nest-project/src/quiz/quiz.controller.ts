import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto/create-quiz.dto';
import { Quiz } from './quiz.entity';

@Controller('quiz')
export class QuizController {
  constructor(private quizeDbService: QuizService) {}
  @Get('/') //get decorator
  getAll() {
    return this.quizeDbService.getAll();
  }

  @Post('/')
  //by default http returning code is 201 - we can change it like below
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async addQuiz(@Body() quizdata: CreateQuizDto): Promise<Quiz> {
    //to work this dto u need pipes validator install it
    console.log(quizdata);
    return await this.quizeDbService.createNewQuiz(quizdata);
  }
}
