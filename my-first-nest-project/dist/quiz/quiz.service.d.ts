import { CreateQuizDto } from './dto/create-quiz.dto/create-quiz.dto';
import { Quiz } from './quiz.entity';
import { Repository } from 'typeorm';
export declare class QuizService {
    private quizRepository;
    constructor(quizRepository: Repository<Quiz>);
    getAll(): string;
    getQuizById(id: number): Promise<Quiz>;
    createNewQuiz(quiz: CreateQuizDto): Promise<Quiz>;
}
