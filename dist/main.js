"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const moment = require("moment");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cookieParser());
    app.use(session({
        secret: process.env["SESSION_SECRET"],
        resave: false,
        saveUninitialized: false,
    }));
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    app.setViewEngine('pug');
    app.use(flash());
    app.enableCors();
    moment.locale('vi');
    app.setLocal("moment", moment);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map