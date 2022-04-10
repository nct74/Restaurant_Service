import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './modules/admin/admin.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AdminModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule { }
