"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitGuard = void 0;
const user_constant_1 = require("../constants/user.constant");
const user_constant_2 = require("../constants/user.constant");
const common_1 = require("@nestjs/common");
let InitGuard = class InitGuard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const response = context.switchToHttp().getResponse();
        if (request.user["init"] === user_constant_2.UserStatus.UNINITIALZED) {
            throw new common_1.ForbiddenException("Uninitialized user");
        }
        response.locals["user"] = request.user;
        response.locals["UserRole"] = user_constant_1.UserRole;
        return true;
    }
};
InitGuard = __decorate([
    (0, common_1.Injectable)()
], InitGuard);
exports.InitGuard = InitGuard;
//# sourceMappingURL=init.guard.js.map