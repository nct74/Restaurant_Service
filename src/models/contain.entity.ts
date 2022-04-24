import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { Dish } from "./dish.entity";
import { Order } from "./order.entity";

@Entity()
export class Contain {
	@ManyToOne((type) => Order, {
		primary: true,
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	})
	@JoinColumn()
	order: Order;

	@ManyToOne((type) => Dish, {
		primary: true,
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	})
	@JoinColumn()
	dish: Dish;

	@Column()
	quantity: number;
}