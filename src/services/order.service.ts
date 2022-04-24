import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "src/models/order.entity";
import { Repository } from "typeorm";

@Injectable()
export class OrderService {
	constructor(
		@InjectRepository(Order) private orderRepository: Repository<Order>,
	) { }

	async getAll(): Promise<Order[]> {
		return await this.orderRepository.find();
	}

	async add(order: Order): Promise<void> {
		await this.orderRepository.insert(order);
	}

	async getByOrderId(id: number): Promise<Order> {
		return await this.orderRepository.findOne(id);
	}

	async delete(order: Order): Promise<void> {
		await this.orderRepository.delete(order.id);
	}
}