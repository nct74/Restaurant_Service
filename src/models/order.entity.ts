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
	time: Date;

	@Column()
	orderStatus: string;

	@CreateDateColumn()
	createAt: Date;

	@UpdateDateColumn()
	updateAt: Date;

	@OneToOne(() => Payment)
	@JoinColumn()
	payment: Payment;

}