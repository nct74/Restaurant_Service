
import { Body, Controller, Post, Res } from "@nestjs/common";
import { Dish } from "src/models/dish.entity";
import { ContainService } from "src/services/contain.service";

@Controller("contain")
export class ContainController {
	constructor(private containService: ContainService) { }

	@Post("getDetail")
	async getDetail(@Body() orderId: any): Promise<Dish[]> {
		console.log(orderId.orderId);
		// const obj = JSON.parse(orderId);
		// console.log(obj.orderId);
		let detailList = await this.containService.getListDishByOrderID(orderId.orderId);
		console.log("NCT");
		console.log(detailList);
		// return {
		// 	// detailList: detailList
		// }
		return;
	}
}