import { Controller, Get, Render } from "@nestjs/common";
import { UserService } from "src/services/user.service";

@Controller("user")
export class UserController {
	constructor(private userService: UserService) { }
	@Get()
	@Render("admin/user/index")
	async index() {
		return ;
	}
}