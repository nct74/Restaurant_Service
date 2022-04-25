
import { Body, Controller, Post, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { UserRole } from "src/constants/user.constant";
import { Roles } from "src/decorators/roles.decorator";
import { RoleGuard } from "src/guards/roles.guard";
import { Dish } from "src/models/dish.entity";
import { ContainService } from "src/services/contain.service";

@Controller("contain")
export class ContainController {
	constructor(private containService: ContainService) { }

	@Post("getDetail")
	@Roles(UserRole.ADMIN, UserRole.EMPLOYEE)
	@UseGuards(AuthGuard('jwt'), RoleGuard)
	async getDetail(@Body() orderId: any) {
		// console.log(orderId.orderId);
		let detailList = await this.containService.getListDishByOrderID(orderId.orderId);
		// console.log(detailList);
		return {
			detailList: detailList
		}
	}
}