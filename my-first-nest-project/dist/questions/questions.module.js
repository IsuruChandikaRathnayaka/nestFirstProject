"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsModule = void 0;
const common_1 = require("@nestjs/common");
const questions_service_1 = require("./questions.service");
const questions_controller_1 = require("./questions.controller");
const typeorm_1 = require("@nestjs/typeorm");
const questions_entity_1 = require("./questions.entity");
const quiz_service_1 = require("../quiz/quiz.service");
const quiz_entity_1 = require("../quiz/quiz.entity");
let QuestionsModule = class QuestionsModule {
};
exports.QuestionsModule = QuestionsModule;
exports.QuestionsModule = QuestionsModule = __decorate([
    (0, common_1.Module)({
        providers: [questions_service_1.QuestionsService, quiz_service_1.QuizService],
        controllers: [questions_controller_1.QuestionsController],
        imports: [typeorm_1.TypeOrmModule.forFeature([questions_entity_1.Questions, quiz_entity_1.Quiz])],
    })
], QuestionsModule);
//# sourceMappingURL=questions.module.js.map