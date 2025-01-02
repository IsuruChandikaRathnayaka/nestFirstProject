import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Questions } from './questions.entity';
import { QuizService } from 'src/quiz/quiz.service';
import { Quiz } from 'src/quiz/quiz.entity';

@Module({
  providers: [QuestionsService,QuizService],
  controllers: [QuestionsController],
  imports: [TypeOrmModule.forFeature([Questions,Quiz])],
})
export class QuestionsModule {}
