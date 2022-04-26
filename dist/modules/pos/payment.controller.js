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
exports.PaymentController = void 0;
const common_1 = require("@nestjs/common");
const payment_service_1 = require("../../services/payment.service");
const payment_entity_1 = require("../../models/payment.entity");
const order_service_1 = require("../../services/order.service");
let PaymentController = class PaymentController {
    constructor(paymentService, orderService) {
        this.paymentService = paymentService;
        this.orderService = orderService;
    }
    async index() {
    }
    async getAll(data, res) {
        console.log(data.orderId);
        var newPayment = new payment_entity_1.Payment();
        newPayment.order = data.orderId;
        newPayment.method = "1";
        newPayment.status = true;
        var ordergetbyID = await this.orderService.getByOrderId(data.orderId);
        if (ordergetbyID) {
            ordergetbyID.orderStatus = true;
            await this.orderService.update(ordergetbyID.id, ordergetbyID);
            await this.paymentService.add(newPayment);
            return res.redirect("/paymentss");
        }
        else {
            return res.redirect("/paymentfail");
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)("pos/payment"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "index", null);
__decorate([
    (0, common_1.Post)('/addpayment'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "getAll", null);
PaymentController = __decorate([
    (0, common_1.Controller)("payment"),
    __metadata("design:paramtypes", [payment_service_1.PaymentService, order_service_1.OrderService])
], PaymentController);
exports.PaymentController = PaymentController;
//# sourceMappingURL=payment.controller.js.map