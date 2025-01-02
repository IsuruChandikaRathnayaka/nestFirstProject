import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { QuestionsController } from './questions/questions.controller';
import { QuestionsService } from './questions/questions.service';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [
    QuizModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    QuestionsModule, //in here i have added the typeorm config to that config folder
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
