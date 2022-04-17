"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PosModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../../services/user.service");
const user_entity_1 = require("../../models/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const order_controller_1 = require("./order.controller");
const dish_service_1 = require("../../services/dish.service");
const dish_entity_1 = require("../../models/dish.entity");
const paymentfail_controller_1 = require("./paymentfail.controller");
const entrance_controller_1 = require("./entrance.controller");
const paymentss_controller_1 = require("./paymentss.controller");
const payment1_controller_1 = require("./payment1.controller");
const homepage_controller_1 = require("./homepage.controller");
const cashier_controller_1 = require("./cashier.controller");
const forgetps_controller_1 = require("./forgetps.controller");
let PosModule = class PosModule {
};
PosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, dish_entity_1.Dish])],
        providers: [user_service_1.UserService, dish_service_1.DishService],
        controllers: [order_controller_1.OrderController, paymentfail_controller_1.PaymentFailController, entrance_controller_1.EntranceController, paymentss_controller_1.PaymentSSController, payment1_controller_1.Payment1Controller, homepage_controller_1.HomeController, cashier_controller_1.CashierController, forgetps_controller_1.ForgetpwController]
    })
], PosModule);
exports.PosModule = PosModule;
//# sourceMappingURL=pos.module.js.map