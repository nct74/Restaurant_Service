import { RoleGuard } from './../../guards/roles.guard';
import { Body, Controller, Get, Post, Query, Render, Res, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { Dish } from "src/models/dish.entity";
import { Response } from 'express';
import { DishService } from "src/services/dish.service";
import { UserRole } from "src/constants/user.constant";
import { Roles } from "src/decorators/roles.decorator";
import { AuthGuard } from "@nestjs/passport";

declare global {
	var img: string;
}

@Controller("dish")
export class DishController {
	constructor(private dishService: DishService) { }

	@Get()
	@Roles(UserRole.ADMIN, UserRole.STAFF)
	@UseGuards(AuthGuard('jwt'), RoleGuard)
	@Render("admin/dish/index")
	async index() {
		const dishList = await this.dishService.getAll();
		// console.log(dishList);
		return {
			dishList: dishList
		};
	}

	@Post("add")
	@Roles(UserRole.ADMIN, UserRole.STAFF)
	@UseGuards(AuthGuard('jwt'), RoleGuard)
	@UseInterceptors(
		FileInterceptor("image", {
			storage: diskStorage({
				destination: "./public/upload",
				filename: (req, file, cb) => {
					const [basename, extname] = file.originalname.split(".");
					global.img = `${basename}-${Date.now()}.${extname}`;
					// console.log(global.img);
					cb(
						null,
						global.img
					);
				},
			}),
		})
	)
	async add(@Body() dish: Dish, @Res() res: Response) {
		var addDish = new Dish();
		addDish.name = dish.name;
		addDish.price = dish.price;
		addDish.info_detail = dish.info_detail;
		addDish.type = dish.type;
		addDish.image = "upload/" + global.img
		// dish.image = "upload/" + global.img
		// console.log(addDish);
		await this.dishService.add(addDish);
		return res.redirect("/dish");
	}

	@Post("edit")
	@Roles(UserRole.ADMIN, UserRole.STAFF)
	@UseGuards(AuthGuard('jwt'), RoleGuard)
	@UseInterceptors(
		FileInterceptor("image", {
			storage: diskStorage({
				destination: "./public/upload",
				filename: (req, file, cb) => {
					const [basename, extname] = file.originalname.split(".");
					global.img = `${basename}-${Date.now()}.${extname}`;
					// console.log(global.img);
					cb(
						null,
						global.img
					);
				},
			}),
		})
	)
	async edit(@Res() res: Response, @Body() dish: any) {
		var editDish = new Dish();
		editDish.id = dish.id;
		editDish.name = dish.name;
		editDish.price = dish.price;
		editDish.info_detail = dish.info_detail;
		editDish.type = dish.type;
		// console.log(typeof global.img);
		if (typeof global.img == "undefined") {
			var oldDish = this.getOne(dish.id);
			editDish.image = (await oldDish).image;
		} else editDish.image = "upload/" + global.img;
		// console.log(editDish);
		await this.dishService.edit(editDish);
		return res.redirect("/dish");
	}

	//Test API Postman
	@Get('getOne')
	@Roles(UserRole.ADMIN, UserRole.STAFF)
	@UseGuards(AuthGuard('jwt'), RoleGuard)
	async getOne(@Body() id: number): Promise<Dish> {
		return this.dishService.getOne(id);
	}

	@Post('delete')
	@Roles(UserRole.ADMIN, UserRole.STAFF)
	@UseGuards(AuthGuard('jwt'), RoleGuard)
	async delete(@Body() dish: Dish, @Res() res: Response) {
		await this.dishService.delete(dish);
		return res.redirect("/dish");
	}
}