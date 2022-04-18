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
exports.OrderController = void 0;
const dish_service_1 = require("../../services/dish.service");
const common_1 = require("@nestjs/common");
let OrderController = class OrderController {
    constructor(dishService) {
        this.dishService = dishService;
    }
    async index() {
        var list = await this.dishService.typeofDish();
        var allofdata = await this.dishService.getAll();
        var a = list[0];
        var b = list[1];
        var c = list[2];
        for (var i = 0; i < 3; i++) {
            list.shift();
        }
        const viewBag = {
            data1: a,
            data2: b,
            data3: c,
            data: list,
            allofdata: allofdata
        };
        return viewBag;
    }
    async getAll(ma) {
        var list = await this.dishService.getdishofftype(ma);
        const viewBag = {
            data: list
        };
        return viewBag;
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)("pos/orderpage"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "index", null);
__decorate([
    (0, common_1.Post)('/getalldish'),
    __param(0, (0, common_1.Body)('ma')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getAll", null);
OrderController = __decorate([
    (0, common_1.Controller)("order"),
    __metadata("design:paramtypes", [dish_service_1.DishService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map