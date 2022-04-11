import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Dish } from "src/models/dish.entity";
import { Repository } from "typeorm";

@Injectable()
export class DishService {
	constructor(
		@InjectRepository(Dish) private dishRepository: Repository<Dish>,
	) { }

	async getAll(): Promise<Dish[]> {
		return await this.dishRepository.find();
	}

	async add(dish: Dish): Promise<void> {
		await this.dishRepository.insert(dish);
	}
}