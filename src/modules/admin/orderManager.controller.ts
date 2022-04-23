import { Controller, Get, Render } from "@nestjs/common";
import { OrderService } from "src/services/order.service";

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
}