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
exports.UserController = void 0;
const user_entity_1 = require("../../models/user.entity");
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const user_service_1 = require("../../services/user.service");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const user_constant_1 = require("../../constants/user.constant");
const passport_1 = require("@nestjs/passport");
const roles_guard_1 = require("../../guards/roles.guard");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async index() {
        const userList = await this.userService.getAll();
        return {
            userList: userList
        };
    }
    async add(user, res) {
        const salt = await bcrypt.genSalt(15);
        user.password = await bcrypt.hash(user.password, salt);
        await this.userService.add(user);
        return res.redirect("/user");
    }
    async edit(user, res) {
        var userToEdit = new user_entity_1.User();
        userToEdit.username = user.username;
        userToEdit.password = user.password;
        userToEdit.cccd = user.cccd;
        userToEdit.role = user.role;
        const salt = await bcrypt.genSalt(15);
        userToEdit.password = await bcrypt.hash(userToEdit.password, salt);
        await this.userService.edit(userToEdit);
        res.redirect("/user");
    }
    async delete(user, res) {
        await this.userService.delete(user);
        res.redirect("/user");
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(user_constant_1.UserRole.ADMIN),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RoleGuard),
    (0, common_1.Render)("admin/user/index"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "index", null);
__decorate([
    (0, common_1.Post)("add"),
    (0, roles_decorator_1.Roles)(user_constant_1.UserRole.ADMIN),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RoleGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "add", null);
__decorate([
    (0, common_1.Post)("edit"),
    (0, roles_decorator_1.Roles)(user_constant_1.UserRole.ADMIN),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RoleGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "edit", null);
__decorate([
    (0, common_1.Post)("delete"),
    (0, roles_decorator_1.Roles)(user_constant_1.UserRole.ADMIN),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RoleGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
UserController = __decorate([
    (0, common_1.Controller)("user"),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map