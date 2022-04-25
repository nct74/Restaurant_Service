import { Payment } from './../models/payment.entity';
import { Repository } from "typeorm";
export declare class PaymentService {
    private paymentRepository;
    constructor(paymentRepository: Repository<Payment>);
    getAll(): Promise<Payment[]>;
    add(Payment: Payment): Promise<void>;
    getByPaymentId(id: number): Promise<Payment>;
    delete(Payment: Payment): Promise<void>;
}
