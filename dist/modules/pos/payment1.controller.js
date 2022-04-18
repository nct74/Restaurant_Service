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
exports.Payment1Controller = void 0;
const common_1 = require("@nestjs/common");
let Payment1Controller = class Payment1Controller {
    async index() {
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)("pos/payment1"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Payment1Controller.prototype, "index", null);
Payment1Controller = __decorate([
    (0, common_1.Controller)("payment1")
], Payment1Controller);
exports.Payment1Controller = Payment1Controller;
//# sourceMappingURL=payment1.controller.js.map