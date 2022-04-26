import { OrderService } from "src/services/order.service";
import { Response } from 'express';
export declare class OrderManagerController {
    private orderService;
    constructor(orderService: OrderService);
    index(): Promise<{
        orderManagerList: import("../../models/order.entity").Order[];
    }>;
    delete(order: any, res: Response): Promise<void>;
}
