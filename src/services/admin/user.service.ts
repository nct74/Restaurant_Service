import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/models/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User) private userRepository: Repository<User>,
	) { }

	async getAll(): Promise<User[]> {
		return await this.userRepository.find();
	}

	async add(user: User): Promise<void> {
		await this.userRepository.insert(user);
	}

	async edit(user: any): Promise<void> {
		await this.userRepository.update(user.username, user);
	}

	async delete(user: User): Promise<void> {
		await this.userRepository.delete(user.username);
	}
}