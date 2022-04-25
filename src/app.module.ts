import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './modules/admin/admin.module';
import { AuthModule } from './modules/auth/auth.module';
import { UnauthorizedExceptionFilter } from './filters/unauthorized-exception.filter';
import { APP_FILTER } from '@nestjs/core';
import { PosModule } from './modules/pos/pos.module';
import { ForbiddenFilter } from './filters/forbidden.filter';
import { NotFoundFilter } from './filters/notfound.filter';
import { InternalServerErrorFilter } from './filters/internal.filter';
import { ExceptionModule } from './modules/exception/exception.module';
@Module({
  imports: [TypeOrmModule.forRoot(), AdminModule, AuthModule, PosModule, ExceptionModule],
  controllers: [],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: UnauthorizedExceptionFilter
  },
    {
      provide: APP_FILTER,
      useClass: ForbiddenFilter,
    },
    {
      provide: APP_FILTER,
      useClass: NotFoundFilter,
    },
    {
      provide: APP_FILTER,
      useClass: InternalServerErrorFilter,
    },],
})
export class AppModule { }
