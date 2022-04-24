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
const order_entity_1 = require("../../models/order.entity");
const dish_service_1 = require("../../services/dish.service");
const common_1 = require("@nestjs/common");
const order_service_1 = require("../../services/order.service");
const contain_service_1 = require("../../services/contain.service");
let OrderController = class OrderController {
    constructor(dishService, orderService, containService) {
        this.dishService = dishService;
        this.orderService = orderService;
        this.containService = containService;
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
        if (ma == "All of dish") {
            var list = await this.dishService.getAll();
        }
        else
            var list = await this.dishService.getdishofftype(ma);
        const viewBag = {
            data: list
        };
        return viewBag;
    }
    async addOrder(arrid, arrquan, total) {
        var newOrder = new order_entity_1.Order();
        newOrder.total = total;
        newOrder.id = Math.floor(1000000 + Math.random() * 9000000);
        var getbyID = await this.orderService.getByOrderId(newOrder.id);
        while (getbyID) {
            newOrder.id = Math.floor(1000000 + Math.random() * 9000000);
            getbyID = await this.orderService.getByOrderId(newOrder.id);
        }
        await this.orderService.add(newOrder);
        for (var i = 0; i < arrid.length; i++) {
            await this.containService.addnewcontain(newOrder.id, arrid[i], arrquan[i]);
        }
        return newOrder.id;
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
__decorate([
    (0, common_1.Post)('/addOrder'),
    __param(0, (0, common_1.Body)('arrid')),
    __param(1, (0, common_1.Body)('arrquan')),
    __param(2, (0, common_1.Body)('total')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Array, Number]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "addOrder", null);
OrderController = __decorate([
    (0, common_1.Controller)("order"),
    __metadata("design:paramtypes", [dish_service_1.DishService, order_service_1.OrderService, contain_service_1.ContainService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map