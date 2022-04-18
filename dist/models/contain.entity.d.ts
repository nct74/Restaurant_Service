import { Dish } from "./dish.entity";
import { Order } from "./order.entity";
export declare class Contain {
    orderId: number;
    dishId: number;
    quantity: number;
    order: Order;
    dish: Dish;
}
