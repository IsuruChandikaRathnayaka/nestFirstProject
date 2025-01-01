import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto/create-quiz.dto';
export declare class QuizController {
    private quizeDbService;
    constructor(quizeDbService: QuizService);
    getAll(): string;
    addQuiz(quizdata: CreateQuizDto): CreateQuizDto;
}
