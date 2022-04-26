import { Order } from 'src/models/order.entity';
import { Dish } from './dish.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";


@Entity()
export class Contain {
	@Column()
	quantity: number;

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




}