import { Quiz } from 'src/quiz/quiz.entity';
import { BaseEntity } from 'typeorm';
export declare class Questions extends BaseEntity {
    idQuestions: number;
    Name: string;
    quiz: Quiz;
}
