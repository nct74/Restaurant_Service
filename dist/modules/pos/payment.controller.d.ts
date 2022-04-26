import { PaymentService } from "src/services/payment.service";
import { Response } from 'express';
import { OrderService } from "src/services/order.service";
export declare class PaymentController {
    private paymentService;
    private orderService;
    constructor(paymentService: PaymentService, orderService: OrderService);
    index(): Promise<void>;
    getAll(data: any, res: Response): Promise<void>;
}
