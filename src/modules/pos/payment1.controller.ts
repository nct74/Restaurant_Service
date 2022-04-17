
import { DishService } from "src/services/dish.service";
import { Controller, Get, Render, Post, Body, Res, UseGuards, Req } from "@nestjs/common";
@Controller("payment1")
export class Payment1Controller {
    @Get()
	@Render("pos/payment1")
	async index() {
    }
}