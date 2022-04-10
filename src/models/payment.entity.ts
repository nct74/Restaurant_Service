import { Column, CreateDateColumn, Entity, JoinTable, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Order } from "./order.entity";

@Entity()
export class Payment {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	method: string;

	@Column()
	time: Date;

	@Column()
	status: string;

	@CreateDateColumn()
	createAt: Date;

	@UpdateDateColumn()
	updateAt: Date;
}

