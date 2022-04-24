
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
import { PaymentController } from "./payment.controller";
import { HomeController } from "./homepage.controller";
import { CashierController } from "./cashier.controller";
import { ForgetpwController } from "./forgetps.controller";
import { OrderService } from "src/services/order.service";
import { Order } from "src/models/order.entity";
import { Contain } from "src/models/contain.entity";
import { ContainService } from "src/services/contain.service";

@Module({
	imports: [TypeOrmModule.forFeature([User,Dish,Order,Contain])],
	providers: [UserService,DishService,OrderService,ContainService],
	controllers: [OrderController, PaymentFailController,EntranceController,PaymentSSController,PaymentController,HomeController,CashierController,ForgetpwController]
})

export class PosModule { }  