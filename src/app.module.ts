import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './modules/admin/admin.module';
import { AuthModule } from './modules/auth/auth.module';
import { UnauthorizedExceptionFilter } from './filters/unauthorized-exception.filter';
import { APP_FILTER } from '@nestjs/core';
import { PosModule } from './modules/pos/pos.module';
@Module({
  imports: [TypeOrmModule.forRoot(), AdminModule, AuthModule, PosModule],
  controllers: [],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: UnauthorizedExceptionFilter
  }],
})
export class AppModule { }
