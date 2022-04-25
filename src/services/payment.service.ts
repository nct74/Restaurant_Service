import { Payment } from './../models/payment.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class PaymentService {
	constructor(
		@InjectRepository(Payment) private paymentRepository: Repository<Payment>,
	) { }

	async getAll(): Promise<Payment[]> {
		return await this.paymentRepository.find();
	}

	async add(Payment: Payment): Promise<void> {
		await this.paymentRepository.insert(Payment);
	}

	async getByPaymentId(id: number): Promise<Payment> {
		return await this.paymentRepository.findOne(id);
	}

	async delete(Payment: Payment): Promise<void> {
		await this.paymentRepository.delete(Payment.id);
	}
}