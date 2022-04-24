import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Contain } from "src/models/contain.entity";
import { Repository } from "typeorm";

@Injectable()
export class ContainService {
	constructor(
		@InjectRepository(Contain) private containRepository: Repository<Contain>,
	) { }

	async getAll(): Promise<Contain[]> {
		return await this.containRepository.find();
	}

	async getByOrderId(id: number): Promise<Contain> {
		return await this.containRepository.findOne(id);
	}

	async add(contain: Contain): Promise<void> {
		await this.containRepository.insert(contain);
	}

	async addnewcontain(orderid: number ,dishid: number , quan : number) {
        return await this.containRepository.query(
            "INSERT INTO contain (`quantity`, `orderId`, `dishId`) VALUES ('"+quan +"','"+ orderid + "','"+ dishid + "') ");
    }
}