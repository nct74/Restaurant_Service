import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as moment from 'moment';
import { join } from 'path';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as session from "express-session";
import flash = require("connect-flash");
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  app.use(cookieParser());
  app.use(
    session({
      secret: process.env["SESSION_SECRET"],
      resave: false,
      saveUninitialized: false,
    })
  );
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('pug');
  app.use(flash());
  moment.locale('vi');
  app.setLocal("moment", moment);
  await app.listen(3000);
}
bootstrap();

// function cookieParser(): any {
//   throw new Error('Function not implemented.');
// }
