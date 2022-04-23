"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const order_entity_1 = require("../../models/order.entity");
const order_service_1 = require("./../../services/order.service");
const orderManager_controller_1 = require("./orderManager.controller");
const user_controller_1 = require("./user.controller");
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../../models/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const user_service_1 = require("../../services/user.service");
const dish_controller_1 = require("./dish.controller");
const dish_entity_1 = require("../../models/dish.entity");
const dish_service_1 = require("../../services/dish.service");
let AdminModule = class AdminModule {
};
AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, dish_entity_1.Dish, order_entity_1.Order])],
        providers: [user_service_1.UserService, dish_service_1.DishService, order_service_1.OrderService],
        controllers: [user_controller_1.UserController, dish_controller_1.DishController, orderManager_controller_1.OrderManagerController]
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map