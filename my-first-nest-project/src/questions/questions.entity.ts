import { Quiz } from 'src/quiz/quiz.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('questions')
export class Questions extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'The unique identifier',
  })
  idQuestions: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  Name: string;

  //() =>highlites the entity type 
  

  @ManyToOne(() => Quiz, (quiz) => quiz.questions, { onDelete: 'CASCADE' })
  quiz: Quiz;
}
