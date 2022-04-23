import { OrderService } from "src/services/order.service";
export declare class OrderManagerController {
    private orderService;
    constructor(orderService: OrderService);
    index(): Promise<{
        orderManagerList: import("../../models/order.entity").Order[];
    }>;
}
