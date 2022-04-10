import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Dish {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	price: number;

	@Column()
	info_detail: string;

	@Column()
	image: string;

	@Column()
	type: string;

	@CreateDateColumn()
	createAt: Date;

	@UpdateDateColumn()
	updateAt: Date;
}