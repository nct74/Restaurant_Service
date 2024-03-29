"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_service_1 = require("./app.service");
const admin_module_1 = require("./modules/admin/admin.module");
const auth_module_1 = require("./modules/auth/auth.module");
const unauthorized_exception_filter_1 = require("./filters/unauthorized-exception.filter");
const core_1 = require("@nestjs/core");
const pos_module_1 = require("./modules/pos/pos.module");
const forbidden_filter_1 = require("./filters/forbidden.filter");
const notfound_filter_1 = require("./filters/notfound.filter");
const internal_filter_1 = require("./filters/internal.filter");
const exception_module_1 = require("./modules/exception/exception.module");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot(), config_1.ConfigModule.forRoot(), admin_module_1.AdminModule, auth_module_1.AuthModule, pos_module_1.PosModule, exception_module_1.ExceptionModule],
        controllers: [],
        providers: [app_service_1.AppService,
            {
                provide: core_1.APP_FILTER,
                useClass: unauthorized_exception_filter_1.UnauthorizedExceptionFilter
            },
            {
                provide: core_1.APP_FILTER,
                useClass: forbidden_filter_1.ForbiddenFilter,
            },
            {
                provide: core_1.APP_FILTER,
                useClass: notfound_filter_1.NotFoundFilter,
            },
            {
                provide: core_1.APP_FILTER,
                useClass: internal_filter_1.InternalServerErrorFilter,
            },],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map