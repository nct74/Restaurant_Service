import { User } from 'src/models/user.entity';
import { Body, Controller, Get, Post, Render, Res } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { UserService } from 'src/services/admin/user.service';
@Controller("user")
export class UserController {
	constructor(private userService: UserService) { }
	@Get()
	@Render("admin/user/index")
	async index() {
		const userList = await this.userService.getAll();
		// console.log(userList);
		return {
			userList: userList
		};
	}

	@Post("add")
	async add(@Body() user: User, @Res() res: Response) {
		const salt = await bcrypt.genSalt(15);
		user.password = await bcrypt.hash(user.password, salt);
		await this.userService.add(user);
		return res.redirect("/user");
	}

	@Post("edit")
	async edit(@Body() user: any, @Res() res: Response) {
		var userToEdit: User = new User();
		userToEdit.username = user.username;
		userToEdit.password = user.password;
		userToEdit.cccd = user.cccd;
		const salt = await bcrypt.genSalt(15);
		userToEdit.password = await bcrypt.hash(userToEdit.password, salt);
		console.log(userToEdit);
		await this.userService.edit(userToEdit);
		res.redirect("/user");
	}

	@Post("delete")
	async delete(@Body() user: any, @Res() res: Response) {
		//console.log("Delete");
		await this.userService.delete(user);
		res.redirect("/user");
	}
}