import { Questions } from 'src/questions/questions.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('quiz')
export class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'The unique identifier',
  })
  idQuizes: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  Title: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  Description: string;

  @Column({
    type: 'boolean',
    default: 1,
  })
  IsActive: boolean;

  @OneToMany(() => Questions, (questions) => questions.quiz)
  questions: Questions[];
}
//this class is responsible for the defining the schema of quiz table
