import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Quiz } from 'src/quiz/quiz.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nest',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  //entities: [Quiz],
  synchronize: true,
  autoLoadEntities: true,
};
