import { UserController } from './user.controller';
import { Module } from "@nestjs/common";
import { User } from 'src/models/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/services/user.service';
import { DishController } from './dish.controller';
import { Dish } from 'src/models/dish.entity';
import { DishService } from 'src/services/dish.service';

@Module({
	imports: [TypeOrmModule.forFeature([User, Dish])],
	providers: [UserService, DishService],
	controllers: [UserController, DishController]
})

export class AdminModule { }