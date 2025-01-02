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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quiz = void 0;
const questions_entity_1 = require("../questions/questions.entity");
const typeorm_1 = require("typeorm");
let Quiz = class Quiz extends typeorm_1.BaseEntity {
};
exports.Quiz = Quiz;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        comment: 'The unique identifier',
    }),
    __metadata("design:type", Number)
], Quiz.prototype, "idQuizes", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        nullable: false,
    }),
    __metadata("design:type", String)
], Quiz.prototype, "Title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        nullable: false,
    }),
    __metadata("design:type", String)
], Quiz.prototype, "Description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'boolean',
        default: 1,
    }),
    __metadata("design:type", Boolean)
], Quiz.prototype, "IsActive", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => questions_entity_1.Questions, (questions) => questions.quiz),
    __metadata("design:type", Array)
], Quiz.prototype, "questions", void 0);
exports.Quiz = Quiz = __decorate([
    (0, typeorm_1.Entity)('quiz')
], Quiz);
//# sourceMappingURL=quiz.entity.js.map