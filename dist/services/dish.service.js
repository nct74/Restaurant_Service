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
exports.DishService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dish_entity_1 = require("../models/dish.entity");
const typeorm_2 = require("typeorm");
let DishService = class DishService {
    constructor(dishRepository) {
        this.dishRepository = dishRepository;
    }
    async getAll() {
        return await this.dishRepository.find();
    }
    async typeofDish() {
        return await this.dishRepository.query("SELECT distinct name,image,type FROM `dish` WHERE 1 GROUP BY type");
    }
    async getdishofftype(type) {
        return await this.dishRepository.query("SELECT * FROM `dish` WHERE type = '" + type + "'");
    }
    async add(dish) {
        await this.dishRepository.insert(dish);
    }
    async edit(dish) {
        await this.dishRepository.update(dish.id, dish);
    }
    async getOne(id) {
        return await this.dishRepository.findOne(id);
    }
    async delete(dish) {
        await this.dishRepository.delete(dish.id);
    }
};
DishService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(dish_entity_1.Dish)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DishService);
exports.DishService = DishService;
//# sourceMappingURL=dish.service.js.map