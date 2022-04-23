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
exports.Contain = void 0;
const typeorm_1 = require("typeorm");
const dish_entity_1 = require("./dish.entity");
const order_entity_1 = require("./order.entity");
let Contain = class Contain {
};
__decorate([
    (0, typeorm_1.ManyToOne)((type) => order_entity_1.Order, {
        primary: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", order_entity_1.Order)
], Contain.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => dish_entity_1.Dish, {
        primary: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", dish_entity_1.Dish)
], Contain.prototype, "dish", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Contain.prototype, "quantity", void 0);
Contain = __decorate([
    (0, typeorm_1.Entity)()
], Contain);
exports.Contain = Contain;
//# sourceMappingURL=contain.entity.js.map