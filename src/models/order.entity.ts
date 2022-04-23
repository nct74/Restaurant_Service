import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Dish } from "./dish.entity";
import { Payment } from "./payment.entity";

@Entity()
export class Order {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	note: string;

	@Column()
	total: number;

	@Column()
	orderStatus: boolean;

	@Column()
	time: Date;

	@CreateDateColumn()
	createAt: Date;

	@UpdateDateColumn()
	updateAt: Date;
}