import { Questions } from './questions.entity';
import { Repository } from 'typeorm';
import { CreateQuestionsDto } from './dto/create-questions.dto';
import { Quiz } from 'src/quiz/quiz.entity';
export declare class QuestionsService {
    private questionsRepository;
    constructor(questionsRepository: Repository<Questions>);
    getAllQuestions(): string;
    createQuestion(questionsData: CreateQuestionsDto, quiz: Quiz): Promise<Questions>;
}
