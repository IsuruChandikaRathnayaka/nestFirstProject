import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuizDto {
  //for the validations we normally use DTo
  //install class validator
  @IsNotEmpty({ message: 'title is required!' })
  @Length(3, 255)
  Title: string;

  @IsNotEmpty({ message: 'Description is required!' })
  @Length(3, 255)
  Description: string;
}
