import { Questions } from 'src/questions/questions.entity';
import { BaseEntity } from 'typeorm';
export declare class Quiz extends BaseEntity {
    idQuizes: number;
    Title: string;
    Description: string;
    IsActive: boolean;
    questions: Questions[];
}
