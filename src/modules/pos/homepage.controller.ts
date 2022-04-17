
import { DishService } from "src/services/dish.service";
import { Controller, Get, Render, Post, Body, Res, UseGuards, Req } from "@nestjs/common";
@Controller("home")
export class HomeController {
    @Get()
	@Render("pos/homepage")
	async index() {
    }
}