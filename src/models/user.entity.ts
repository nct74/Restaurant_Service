import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Dish } from "./dish.entity";

@Entity()
export class User {
	@PrimaryColumn()
	username: string;

	@Column({ nullable: false })
	password: string;

	@Column({ nullable: false })
	cccd: string;

	@Column()
	role: number;

	@CreateDateColumn()
	createAt: Date;

	@UpdateDateColumn()
	updateAt: Date;
}