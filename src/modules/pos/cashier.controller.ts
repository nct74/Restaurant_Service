
import { DishService } from "src/services/dish.service";
import { Controller, Get, Render, Post, Body, Res, UseGuards, Req } from "@nestjs/common";
@Controller("cashier")
export class CashierController {
    @Get()
	@Render("pos/cashier")
	async index() {
    }
}