import { Body, Controller, Get, Post, Render, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { Dish } from "src/models/dish.entity";
import { DishService } from "src/services/admin/dish.service";
import { Response } from 'express';
@Controller("dish")
export class DishController {
	constructor(private dishService: DishService) { }

	@Get()
	@Render("admin/dish/index")
	async index() {
		const dishList = await this.dishService.getAll();
		// console.log(dishList);
		return {
			dishList: dishList
		};
	}

	@Post("/add")
	@UseInterceptors(
		FileInterceptor("sampleFile", {
			storage: diskStorage({
				destination: "./public/upload",
				filename: (req, file, cb) => {
					const [basename, extname] = file.originalname.split(".");
					cb(
						null,
						`${basename}-${Date.now()}.${extname}`
					);
				},
			}),
		})
	)
	async add(@UploadedFile() file: Express.Multer.File, @Body() dish: Dish, @Res() res: Response) {
		
		return res.redirect("/dish");
	}
}