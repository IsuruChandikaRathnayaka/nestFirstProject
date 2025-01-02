import { QuestionsService } from './questions.service';
import { CreateQuestionsDto } from './dto/create-questions.dto';
import { Questions } from './questions.entity';
import { QuizService } from 'src/quiz/quiz.service';
export declare class QuestionsController {
    private questionsDbService;
    private quizDbService;
    constructor(questionsDbService: QuestionsService, quizDbService: QuizService);
    getAllQuestions(): string;
    createQuestion(questiondata: CreateQuestionsDto): Promise<Questions>;
}
