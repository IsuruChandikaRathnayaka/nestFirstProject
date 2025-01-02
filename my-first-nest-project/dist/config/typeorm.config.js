"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'nest',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
    autoLoadEntities: true,
};
//# sourceMappingURL=typeorm.config.js.map