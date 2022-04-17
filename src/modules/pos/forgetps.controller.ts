
import { DishService } from "src/services/dish.service";
import { Controller, Get, Render, Post, Body, Res, UseGuards, Req } from "@nestjs/common";
@Controller("forgetpw")
export class ForgetpwController {
    @Get()
	@Render("pos/forgetpw")
	async index() {
    }
}