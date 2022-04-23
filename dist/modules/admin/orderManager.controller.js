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
exports.OrderManagerController = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("../../services/order.service");
let OrderManagerController = class OrderManagerController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async index() {
        const orderManagerList = await this.orderService.getAll();
        return {
            orderManagerList: orderManagerList
        };
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)("admin/orderManager/index"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderManagerController.prototype, "index", null);
OrderManagerController = __decorate([
    (0, common_1.Controller)("orderManager"),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderManagerController);
exports.OrderManagerController = OrderManagerController;
//# sourceMappingURL=orderManager.controller.js.map