
import { DishService } from "src/services/dish.service";
import { Controller, Get, Render, Post, Body, Res, UseGuards, Req } from "@nestjs/common";
@Controller("paymentfail")
export class PaymentFailController {
    @Get()
	@Render("pos/paymentfail")
	async index() {
    }
}