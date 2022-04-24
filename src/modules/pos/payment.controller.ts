
import { DishService } from "src/services/dish.service";
import { Controller, Get, Render, Post, Body, Res, UseGuards, Req } from "@nestjs/common";
@Controller("payment")
export class PaymentController {
    @Get()
	@Render("pos/payment")
	async index() {
    }
}