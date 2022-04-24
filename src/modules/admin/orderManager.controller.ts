import { Body, Controller, Get, Post, Render, Res } from "@nestjs/common";
import { OrderService } from "src/services/order.service";
import { Response } from 'express';
@Controller("orderManager")
export class OrderManagerController {
	constructor(private orderService: OrderService) { }

	@Get()
	@Render("admin/orderManager/index")
	async index() {
		const orderManagerList = await this.orderService.getAll();
		return {
			orderManagerList: orderManagerList
		};
	}

	@Post("delete")
	async delete(@Body() order: any, @Res() res: Response) {
		await this.orderService.delete(order);
		res.redirect("/orderManager");
	}
}