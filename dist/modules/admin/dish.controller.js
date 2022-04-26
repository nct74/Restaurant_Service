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
exports.DishController = void 0;
const roles_guard_1 = require("./../../guards/roles.guard");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const dish_entity_1 = require("../../models/dish.entity");
const dish_service_1 = require("../../services/dish.service");
const user_constant_1 = require("../../constants/user.constant");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const passport_1 = require("@nestjs/passport");
let DishController = class DishController {
    constructor(dishService) {
        this.dishService = dishService;
    }
    async index() {
        const dishList = await this.dishService.getAll();
        return {
            dishList: dishList
        };
    }
    async add(dish, res) {
        var addDish = new dish_entity_1.Dish();
        addDish.name = dish.name;
        addDish.price = dish.price;
        addDish.info_detail = dish.info_detail;
        addDish.type = dish.type;
        addDish.image = "upload/" + global.img;
        await this.dishService.add(addDish);
        return res.redirect("/dish");
    }
    async edit(res, dish) {
        var editDish = new dish_entity_1.Dish();
        editDish.id = dish.id;
        editDish.name = dish.name;
        editDish.price = dish.price;
        editDish.info_detail = dish.info_detail;
        editDish.type = dish.type;
        if (typeof global.img == "undefined") {
            var oldDish = this.getOne(dish.id);
            editDish.image = (await oldDish).image;
        }
        else
            editDish.image = "upload/" + global.img;
        await this.dishService.edit(editDish);
        return res.redirect("/dish");
    }
    async getOne(id) {
        return this.dishService.getOne(id);
    }
    async delete(dish, res) {
        await this.dishService.delete(dish);
        return res.redirect("/dish");
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(user_constant_1.UserRole.ADMIN, user_constant_1.UserRole.STAFF),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RoleGuard),
    (0, common_1.Render)("admin/dish/index"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DishController.prototype, "index", null);
__decorate([
    (0, common_1.Post)("add"),
    (0, roles_decorator_1.Roles)(user_constant_1.UserRole.ADMIN, user_constant_1.UserRole.STAFF),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RoleGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("image", {
        storage: (0, multer_1.diskStorage)({
            destination: "./public/upload",
            filename: (req, file, cb) => {
                const [basename, extname] = file.originalname.split(".");
                global.img = `${basename}-${Date.now()}.${extname}`;
                cb(null, global.img);
            },
        }),
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dish_entity_1.Dish, Object]),
    __metadata("design:returntype", Promise)
], DishController.prototype, "add", null);
__decorate([
    (0, common_1.Post)("edit"),
    (0, roles_decorator_1.Roles)(user_constant_1.UserRole.ADMIN, user_constant_1.UserRole.STAFF),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RoleGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("image", {
        storage: (0, multer_1.diskStorage)({
            destination: "./public/upload",
            filename: (req, file, cb) => {
                const [basename, extname] = file.originalname.split(".");
                global.img = `${basename}-${Date.now()}.${extname}`;
                cb(null, global.img);
            },
        }),
    })),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DishController.prototype, "edit", null);
__decorate([
    (0, common_1.Get)('getOne'),
    (0, roles_decorator_1.Roles)(user_constant_1.UserRole.ADMIN, user_constant_1.UserRole.STAFF),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RoleGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DishController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)('delete'),
    (0, roles_decorator_1.Roles)(user_constant_1.UserRole.ADMIN, user_constant_1.UserRole.STAFF),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RoleGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dish_entity_1.Dish, Object]),
    __metadata("design:returntype", Promise)
], DishController.prototype, "delete", null);
DishController = __decorate([
    (0, common_1.Controller)("dish"),
    __metadata("design:paramtypes", [dish_service_1.DishService])
], DishController);
exports.DishController = DishController;
//# sourceMappingURL=dish.controller.js.map