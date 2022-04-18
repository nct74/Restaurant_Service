
import { DishService } from "src/services/dish.service";
import { Controller, Get, Render, Post, Body, Res, UseGuards, Req } from "@nestjs/common";
@Controller("paymentss")
export class PaymentSSController {
    @Get()
	@Render("pos/paymentss")
	async index() {
    }
}