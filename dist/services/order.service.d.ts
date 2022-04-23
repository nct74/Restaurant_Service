import { Order } from "src/models/order.entity";
import { Repository } from "typeorm";
export declare class OrderService {
    private orderRepository;
    constructor(orderRepository: Repository<Order>);
    getAll(): Promise<Order[]>;
    add(order: Order): Promise<void>;
    getByOrderId(id: number): Promise<Order>;
}
