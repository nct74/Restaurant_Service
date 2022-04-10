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
}