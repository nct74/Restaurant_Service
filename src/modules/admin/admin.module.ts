import { UserController } from './user.controller';
import { Module } from "@nestjs/common";
import { User } from 'src/models/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/services/admin/user.service';
import { DishService } from 'src/services/admin/dish.service';
import { DishController } from './dish.controller';
import { Dish } from 'src/models/dish.entity';

@Module({
	imports: [TypeOrmModule.forFeature([User, Dish])],
	providers: [UserService, DishService],
	controllers: [UserController, DishController]
})

export class AdminModule { }