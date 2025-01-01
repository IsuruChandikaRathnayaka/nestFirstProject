import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuizDto {
  //for the validations we normally use DTo
  //install class validator
  @IsNotEmpty({ message: 'title is required!' })
  @Length(3, 255)
  title: string;

  @IsNotEmpty({ message: 'Description is required!' })
  @Length(3, 255)
  description: string;
}
