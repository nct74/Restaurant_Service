import { Order } from 'src/models/order.entity';
import { OrderService } from './../../services/order.service';
import { OrderManagerController } from './orderManager.controller';
import { UserController } from './user.controller';
import { Module } from "@nestjs/common";
import { User } from 'src/models/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/services/user.service';
import { DishController } from './dish.controller';
import { Dish } from 'src/models/dish.entity';
import { DishService } from 'src/services/dish.service';

@Module({
	imports: [TypeOrmModule.forFeature([User, Dish, Order])],
	providers: [UserService, DishService, OrderService],
	controllers: [UserController, DishController, OrderManagerController]
})

export class AdminModule { }