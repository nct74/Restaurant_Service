import { Body, Controller, Get, Post, Render, Res, UseGuards } from "@nestjs/common";
import { OrderService } from "src/services/order.service";
import { Response } from 'express';
import { Roles } from "src/decorators/roles.decorator";
import { UserRole } from "src/constants/user.constant";
import { AuthGuard } from "@nestjs/passport";
import { RoleGuard } from "src/guards/roles.guard";
@Controller("orderManager")
export class OrderManagerController {
	constructor(private orderService: OrderService) { }

	@Get()
	@Roles(UserRole.ADMIN)
	@UseGuards(AuthGuard('jwt'), RoleGuard)
	@Render("admin/orderManager/index")
	async index() {
		const orderManagerList = await this.orderService.getAll();
		return {
			orderManagerList: orderManagerList
		};
	}

	@Post("delete")
	@Roles(UserRole.ADMIN, UserRole.EMPLOYEE)
	@UseGuards(AuthGuard('jwt'), RoleGuard)
	async delete(@Body() order: any, @Res() res: Response) {
		await this.orderService.delete(order);
		res.redirect("/orderManager");
	}
}