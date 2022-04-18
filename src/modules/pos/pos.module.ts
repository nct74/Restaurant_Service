
import { Module } from "@nestjs/common";
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from "./order.controller";
import { DishService } from "src/services/dish.service";
import { Dish } from "src/models/dish.entity";
import { PaymentFailController } from "./paymentfail.controller";
import { EntranceController } from "./entrance.controller";
import { PaymentSSController } from "./paymentss.controller";
import { Payment1Controller } from "./payment1.controller";
import { HomeController } from "./homepage.controller";
import { CashierController } from "./cashier.controller";
import { ForgetpwController } from "./forgetps.controller";

@Module({
	imports: [TypeOrmModule.forFeature([User,Dish])],
	providers: [UserService,DishService],
	controllers: [OrderController, PaymentFailController,EntranceController,PaymentSSController,Payment1Controller,HomeController,CashierController,ForgetpwController]
})

export class PosModule { }