import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Dish } from "./dish.entity";
import { Order } from "./order.entity";

@Entity()
export class Contain {
	@PrimaryColumn()
	orderId: number;

	@PrimaryColumn()
	dishId: number;

	@Column()
	quantity: number;
	@OneToOne(() => Order)
	@JoinColumn()
	order: Order;

	@OneToOne(() => Dish)
	@JoinColumn()
	dish: Dish;
}