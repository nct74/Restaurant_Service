
import { DishService } from "src/services/dish.service";
import { Controller, Get, Render, Post, Body, Res, UseGuards, Req } from "@nestjs/common";
@Controller("entrance")
export class EntranceController {
    @Get()
	@Render("pos/entrance")
	async index() {
    }
}