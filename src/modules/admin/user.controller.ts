import { User } from 'src/models/user.entity';
import { Body, Controller, Get, Post, Render, Res, UseGuards } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { UserService } from 'src/services/user.service';
import { Roles } from 'src/decorators/roles.decorator';
import { UserRole } from 'src/constants/user.constant';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from 'src/guards/roles.guard';
@Controller("user")
export class UserController {
	constructor(private userService: UserService) { }
	@Get()
	@Roles(UserRole.ADMIN)
	@UseGuards(AuthGuard('jwt'), RoleGuard)
	@Render("admin/user/index")
	async index() {
		const userList = await this.userService.getAll();
		// console.log(userList);
		return {
			userList: userList
		};
	}

	@Post("add")
	@Roles(UserRole.ADMIN)
	@UseGuards(AuthGuard('jwt'), RoleGuard)
	async add(@Body() user: User, @Res() res: Response) {
		const salt = await bcrypt.genSalt(15);
		user.password = await bcrypt.hash(user.password, salt);
		await this.userService.add(user);
		return res.redirect("/user");
	}

	@Post("edit")
	@Roles(UserRole.ADMIN)
	@UseGuards(AuthGuard('jwt'), RoleGuard)
	async edit(@Body() user: any, @Res() res: Response) {
		var userToEdit: User = new User();
		userToEdit.username = user.username;
		userToEdit.password = user.password;
		userToEdit.cccd = user.cccd;
		userToEdit.role = user.role;
		const salt = await bcrypt.genSalt(15);
		userToEdit.password = await bcrypt.hash(userToEdit.password, salt);
		// console.log(userToEdit);
		await this.userService.edit(userToEdit);
		res.redirect("/user");
	}

	@Post("delete")
	@Roles(UserRole.ADMIN)
	@UseGuards(AuthGuard('jwt'), RoleGuard)
	async delete(@Body() user: any, @Res() res: Response) {
		//console.log("Delete");
		await this.userService.delete(user);
		res.redirect("/user");
	}
}