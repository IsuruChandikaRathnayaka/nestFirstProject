"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsController = void 0;
const common_1 = require("@nestjs/common");
const questions_service_1 = require("./questions.service");
const create_questions_dto_1 = require("./dto/create-questions.dto");
const quiz_service_1 = require("../quiz/quiz.service");
let QuestionsController = class QuestionsController {
    constructor(questionsDbService, quizDbService) {
        this.questionsDbService = questionsDbService;
        this.quizDbService = quizDbService;
    }
    getAllQuestions() {
        return this.questionsDbService.getAllQuestions();
    }
    async createQuestion(questiondata) {
        const quiz = await this.quizDbService.getQuizById(questiondata.quizIdQuizes);
        console.log('questions controller quize returned : ', quiz);
        console.log('This is how questions data is comming : ', questiondata);
        return await this.questionsDbService.createQuestion(questiondata, quiz);
    }
};
exports.QuestionsController = QuestionsController;
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QuestionsController.prototype, "getAllQuestions", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, common_1.HttpCode)(201),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_questions_dto_1.CreateQuestionsDto]),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "createQuestion", null);
exports.QuestionsController = QuestionsController = __decorate([
    (0, common_1.Controller)('questions'),
    __metadata("design:paramtypes", [questions_service_1.QuestionsService,
        quiz_service_1.QuizService])
], QuestionsController);
//# sourceMappingURL=questions.controller.js.map