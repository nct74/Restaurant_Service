import { UserRole, UserStatus } from "src/constants/user.constant";
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

	@Column({ default: UserRole.EMPLOYEE })
	role: number;

	@Column({ default: UserStatus.UNINITIALZED })
	init: number;

	@CreateDateColumn()
	createAt: Date;

	@UpdateDateColumn()
	updateAt: Date;
}