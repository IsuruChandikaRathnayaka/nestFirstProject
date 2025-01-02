import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuestionsDto {
  @IsNotEmpty({ message: 'Question is Required!' })
  @Length(3, 255)
  Name: string;

  @IsNotEmpty({ message: 'Quiz id is required!' })
  quizIdQuizes: number;
}
